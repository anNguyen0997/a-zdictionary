import { useState } from 'react';
import './App.css';
import './css/Payment.css'
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1 id="paymentMessage">This donation will be towards making a-z Dictionary a better experience for users.
      All donations are greatly appreciated!</h1>
			  {showItem ? ( <StripeContainer /> ) 
      : 
      (
				<>
					<h3 id="price">$5.00</h3>
					<button onClick={() => setShowItem(true)} id="paymentButton">Send Support</button>
				</>
			)}
		</div>
	);
}

export default App;