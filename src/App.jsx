import { useState } from 'react';
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShoppingBag, UserRound, Heart, Star } from 'lucide-react';

const benefits = ['Thoughtful pieces, made to last', 'Free shipping on your first order', 'A little something for your birthday'];

function App() {
  const [mode, setMode] = useState('signup');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const isSignup = mode === 'signup';

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(isSignup ? 'Your account form is ready to connect to your backend.' : 'Your login form is ready to connect to your backend.');
  }

  return (
    <main className="page-shell">
      <section className="auth-card" aria-label="Account access">
        <div className="form-panel">
          <a className="brand" href="#home" aria-label="Your Cart home">
            <span className="brand-mark"><ShoppingBag size={18} strokeWidth={1.9} /></span>
            <span>YOUR<span className="brand-amp">CART</span></span>
          </a>

          <div className="form-content">
            <p className="eyebrow">YOUR FAVORITES ARE WAITING</p>
            <h1>{isSignup ? 'Join the good stuff.' : 'Welcome back.'}</h1>
            <p className="intro">{isSignup ? 'Create an account to save your favorites and check out faster.' : 'Sign in to see your orders, saved items, and more.'}</p>

            <div className="mode-switch" role="tablist" aria-label="Choose account action">
              <button className={isSignup ? 'active' : ''} type="button" role="tab" aria-selected={isSignup} onClick={() => { setMode('signup'); setMessage(''); }}>Create account</button>
              <button className={!isSignup ? 'active' : ''} type="button" role="tab" aria-selected={!isSignup} onClick={() => { setMode('login'); setMessage(''); }}>Sign in</button>
            </div>

            <form onSubmit={handleSubmit}>
              {isSignup && <label className="field"><span className="field-label">Your name</span><span className="input-wrap"><UserRound size={17} /><input name="name" type="text" placeholder="Jamie Morgan" autoComplete="name" required /></span></label>}
              <label className="field"><span className="field-label">Email address</span><span className="input-wrap"><Mail size={17} /><input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></span></label>
              <label className="field"><span className="field-label">Password</span><span className="input-wrap"><LockKeyhole size={17} /><input name="password" type={showPassword ? 'text' : 'password'} placeholder="At least 8 characters" autoComplete={isSignup ? 'new-password' : 'current-password'} minLength={8} required /><button className="reveal" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></span></label>
              {isSignup && <label className="check-row"><input type="checkbox" required /><span>I agree to the <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</span></label>}
              {!isSignup && <div className="forgot-row"><a href="#reset">Forgot password?</a></div>}
              <button className="submit-button" type="submit">{isSignup ? 'Create my account' : 'Sign in'}<ArrowRight size={17} /></button>
              {message && <p className="form-message" role="status">{message}</p>}
            </form>

            <p className="secure-note">Your details stay yours. We never share your information.</p>
          </div>
          <p className="copyright">© 2025 Form & Field</p>
        </div>

        <aside className="story-panel">
          <div className="story-top"><span className="season-tag"><span /> THE WEEKEND EDIT</span><Heart size={19} strokeWidth={1.8} /></div>
          <div className="story-copy"><p className="story-kicker">A LITTLE TREAT, ON US</p><h2>Your next<br />favorite is<br /><em>in here.</em></h2><p className="story-description">Sign up for first dibs, easy returns, and 10% off your first order.</p></div>
          <div className="still-life" aria-hidden="true"><div className="sun-disc" /><div className="product-card product-one"><div className="product-shape shape-one" /><span>EVERYDAY TOTE</span><b>$38</b></div><div className="product-card product-two"><div className="product-shape shape-two" /><span>CLASSIC SNEAKER</span><b>$64</b></div><div className="product-card product-three"><div className="product-shape shape-three" /><span>COLOR POP</span><b>$22</b></div><div className="promo-sticker"><strong>10%</strong><span>OFF</span></div></div>
          <div className="benefits"><p>SHOP WITH YOUR ACCOUNT</p>{benefits.map((benefit, index) => <div className="benefit" key={benefit}><span>{index === 0 ? <Star size={12} fill="currentColor" /> : `0${index + 1}`}</span>{benefit}</div>)}</div>
          <div className="image-caption"><span>NEW SEASON, NEW FAVORITES</span><span>SHOP NOW ↗</span></div>
        </aside>
      </section>
    </main>
  );
}

export default App;
