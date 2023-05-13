import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import './style.css';
import classNames from 'classnames';

const Login = () => {

    const [isActive, setActive] = useState(false);

    var buttonClasses = classNames({
        "container": true,
         "right-panel-active": isActive
       })

    return (
        <div className={buttonClasses} id="main">
            <div className="sign-up">
                <form action="#">
                    <h1>Hesap Oluştur</h1>
                    <p>Mail Adresini Kullanarak Kayıt Ol</p>
                    <input type="text" name="txt" placeholder="Ad" required="" />
                    <input type="text" surname="txt" placeholder="Soyad" required="" />
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Şifre" required="" />
                    <button>Kayıt Ol</button>
                </form>
            </div>
            <div className="sign-in">
                <form action="#">
                    <h1>Giriş Yap</h1>
                    <p>Önceden Oluşturduğunuz Hesaba Giriş Yapın</p>
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Şifre" required="" />
                    <a href="#">Şifremi Unuttum</a>
                    <button>Giriş Yap</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-left">
                        <h1>Hoş Geldiniz</h1>
                        <p>Mevcut Hesabınızla Giriş Yapabilirsiniz</p>
                        <button id="signIn" onClick={() => setActive(false)}>Giriş Yap</button>
                    </div>
                    <div className="overlay-right">
                        <h1>Sağlıklı Günler Dileriz</h1>
                        <p>
                            Hesabınız Yoksa Hizmetlerimize Erişmek İçin Şimdi Kayıt
                            Olabilirsiniz
                        </p>
                        <button id="signUp" onClick={() => setActive(true)}>Kayıt Ol</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login