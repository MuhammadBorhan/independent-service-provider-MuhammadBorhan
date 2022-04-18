import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container py-3'>
            <div className="row">
                <div className="col-12">
                    <article className='border p-2 mb-3 blogs'>
                        <h2><span className='text-success fw-bolder'>Question: </span>Difference between authorization and authentication.</h2>
                        <p className='text-justify'><span className='text-info fw-bold fs-4'>Answer: </span>Authorization is the act of granting an authenticated party permission to do something. It specifies what data you're allowed to access and what you can do with that data. Authorization is sometimes shortened to AuthZ.The Microsoft identity platform simplifies authorization and authentication for application developers by providing identity as a service. It supports industry-standard protocols and open-source libraries for different platforms to help you start coding quickly. It allows developers to build applications that sign in all Microsoft identities, get tokens to call Microsoft Graph, access Microsoft APIs, or access other APIs that developers have built. The Microsoft identity platform uses the OAuth 2.0 protocol for handling authorization where, Authentication is the process of proving that you are who you say you are. It's sometimes shortened to AuthN. The Microsoft identity platform uses the OpenID Connect protocol for handling authentication. Creating apps that each maintain their own username and password information incurs a high administrative burden when adding or removing users across multiple apps. Instead, your apps can delegate that responsibility to a centralized identity provider.Azure Active Directory is a centralized identity provider in the cloud.</p>
                    </article>

                    <article className='border p-2 blogs mb-3'>
                        <h2><span className='text-success fw-bolder'>Question: </span>Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p className='text-justify'><span className='text-info fw-bold fs-4'>Answer: </span>I'm learning frontend development, but I do not want to learn any complex backend yet. Firebase seems to a easy alternative. How would I go about learning it. I want to learn auth, storage, Firestore, cloud functions, real-time database and maybe more. .If you're just starting out programming, I would totally suggest you to go with Firebase, as it allows you to build even complex projects quite easily. It has all the tools you need to get going, from authentication to hosting. In addition to your password, Login.gov requires that you set up at least one secondary authentication method to keep your account secure. This is two-factor authentication (2FA). We use 2FA as an added layer of protection to secure your information. While authentication applications are not protected if your device is lost or stolen, this method offers more security than phone calls or text messaging against phishing, hacking, or interception.</p>
                    </article>

                    <article className='border p-2 blogs'>
                        <h2><span className='text-success fw-bolder'>Question: </span>What other services does firebase provide other than authentication.</h2>
                        <p className='text-justify'><span className='text-info fw-bold fs-4'>Answer: </span>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend. You can sign in users to your Firebase app either by using FirebaseUI as a complete drop-in auth solution or by using the Firebase Authentication SDK to manually integrate one or several sign-in methods into your app.</p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Blogs;