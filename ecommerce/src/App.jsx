import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import CartProduct from './components/CartProduct'
import AddProduct from './pages/AddProduct'
import Dashboard from './pages/admin/Dashboard.jsx'
import CheckoutSuccess from './components/CheckoutSuccess.jsx'
import Success from './pages/Success.jsx'
import Cancel from './pages/Cancel.jsx'



function App() {
 
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/cartproduct' element={
        <protectedRouteForUser>
          <CartProduct/>
        </protectedRouteForUser>
         }/>
         <Route path='/success' element={<CheckoutSuccess/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/addproduct' element={<AddProduct/>}/>
      
       <Route path='/admin' element={
        <protectedAdmin>
           <Dashboard/>
        </protectedAdmin>
         
        }/>
        <Route path='/cancel' element={<Cancel/>}/> 
      </Routes>
    </Router>
    
    </>
  )
}

export default App





//Protected Routes for User

export const protectedRouteForUser=({children})=>{
  const user=localStorage.getItem('user')
if(user){
  return(children)
}
else{
  return(<Navigate to='/login'/>)
}
}

//Protected route for admin

export const protectedAdmin=({children})=>{
  const admin=JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email);
  if(admin.user.email==='admin@gmail.com'){
    return(children)
  }else{
    return(<Navigate to='/login'/>)
  }
  
}
