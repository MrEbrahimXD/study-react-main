import { Link } from 'react-router-dom';
import './errorPage.css';

const ErrorPage = () => {
    return (
        <div className='error-container'>
            <h1 className='error-title'>خطأ 404</h1>
            <p className='error-details'>الصفحة غير متاحة أو لم يتم انشائها انتقل الي الصفحة الرئيسية</p>
            <Link to="/" className='error-link'>من هنا</Link>
        </div>
    );
}

export default ErrorPage;
