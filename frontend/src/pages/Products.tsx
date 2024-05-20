import Header from '../components/Header';
import CardQuestion from '../components/CardQuestion';

function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <h1 className="hero-subtitle ml-20 mt-12 mb-12">Frequently Asked Questions</h1>
      <div className="flex-grow flex items-center justify-center">
        <CardQuestion />
      </div>
    </div>
  );
}

export default Products;
