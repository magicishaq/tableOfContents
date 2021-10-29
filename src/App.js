import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent'
import Layout from './components/Layout'
import TableOfContents from './components/TableOfContents'


function App() {
  return (
    <Layout>
      <MainContent />
      <TableOfContents />
    </Layout>
    
  );
}

export default App;
