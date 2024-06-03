import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import Header from '../components/Header';
import Chart from '../components/Chart';
import BarChart from '../components/BarChart';
import Widget from '../components/Widget';
import QuestionsTable from '../components/QuestionsTable';
import adminBackgroundImage from '../assets/AdminFoto.jpeg';
import { useFaqs } from '../components/FaqContext';
import { useTranslation } from 'react-i18next';

interface Question {
  _id: string;
  question: string;
  answer: string;
}

function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeUsers, setActiveUsers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [adminName, setAdminName] = useState('Admin');

  const getToken = () => localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
  };

  const { faqs, updateFaqs } = useFaqs();

  useEffect(() => {
    const initializeUser = async () => {
      const token = getToken();
      if (token) {
        const decodedToken: any = jwtDecode(token);
        setAdminName(decodedToken.name);
      }
    };

    initializeUser();
  }, []);

  
  useEffect(() => {
    axios.get('https://neorisprueba.onrender.com/api/v1/faqs/', { headers })
      .then(response => {
        console.log('Received FAQ questions:', response.data);
        updateFaqs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the FAQ questions!', error);
      });
  }, []);

  useEffect(() => {
    axios.get('https://neorisprueba.onrender.com/api/v1/active/users', { headers })
      .then(response => {
        console.log('Received active users:', response.data);
        setActiveUsers(response.data.activeUsers);
      })
      .catch(error => {
        console.error('There was an error fetching the active users!', error);
      });
  }, []);

  useEffect(() => {
    axios.get('https://neorisprueba.onrender.com/api/v1/total/questions', { headers })
      .then(response => {
        console.log('Received total questions:', response.data);
        setTotalQuestions(response.data.totalQuestions);
      })
      .catch(error => {
        console.error('There was an error fetching the total questions!', error);
      });
  }, []);

  const handleAddQuestion = () => {
    navigate('/AddQuestion');
  };

  const handleEditQuestion = (question: Question) => {
    navigate('/EditQuestions', { state: { question } });
  };

  const handleDeleteQuestion = (id: string) => {
    axios.delete(`https://neorisprueba.onrender.com/api/v1/faq/${id}`, { headers })
      .then(response => {
        console.log('Question deleted successfully!', response);
        updateFaqs((prevFaqs: Question[]) => prevFaqs.filter((faq: Question) => faq._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the question!', error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <div className="flex flex-col lg:flex-row justify-around items-center px-4 py-6 space-y-4 lg:space-y-0">
        <div className="flex-grow flex flex-col justify-center items-start px-2 lg:px-4">
          <div
            className="bg-dark-800 p-4 lg:p-6 shadow-lg rounded-lg w-full"
            style={{
              backgroundImage: `url(${adminBackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "200px",
              color: "#FFFFFF",
            }}
          >
            <h2 className="text-xl lg:text-3xl font-semibold">
              {t('welcome_back')}, {adminName}!
            </h2>
            <p className="hidden md:block">
              {t('glad_to_see_you_again')}
            </p>
            <p className="block md:hidden">{t('welcome_back')}</p>
            <button className="mt-2 lg:mt-4 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate('/ChatPage')}>
              {t('tap_to_ask')} →
            </button>
          </div>
          <div className="w-full mt-4 mb-11">
            <BarChart />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-2 lg:px-4">
          <div className="bg-none rounded-lg shadow-md p-4 lg:p-6">
            <Chart />
            <h2 className="text-lg lg:text-xl font-semibold text-white m-4">
              {t('stats')}
            </h2>
            <div className="flex flex-row gap-4">
              <Widget count={activeUsers} label={t('active_users')} />
              <Widget count={totalQuestions} label={t('total_questions')} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <QuestionsTable
          questions={faqs}
          onAdd={handleAddQuestion}
          onEdit={handleEditQuestion}
          onDelete={handleDeleteQuestion}
        />
      </div>
    </div>
  );
}

export default Dashboard;
