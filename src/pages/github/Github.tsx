import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

const githubCodePage = () => {
  // init.
  const location = useLocation();
  const nav = useNavigate();
  console.log(location);
  // TODO:完成解析hash
  return <div>github code page.</div>;
};

export default githubCodePage;
