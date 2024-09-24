// pages/index.tsx (for Next.js 12 or earlier)
// or
// app/page.tsx (for Next.js 13 with the App Router)

'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';




const HomePage: React.FC = () => {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Features data
  const features = [
    {
      title: 'Fast Deployment',
      description:
        'Deploy your token on the blockchain swiftly without any coding knowledge.',
      icon: '/images/fast-deployment.png',
    },
    {
      title: 'User-Friendly Interface',
      description:
        'An intuitive platform that makes token creation accessible to everyone.',
      icon: '/images/user-friendly.png',
    },
    {
      title: 'Secure and Reliable',
      description:
        'Our service ensures top-notch security and reliability for your tokens.',
      icon: '/images/secure.png',
    },
  ];

  // Steps data
  const steps = [
    {
      number: '1',
      title: 'Login with Metamask',
      description: 'Connect your account with Metamask.',
    },
    {
      number: '2',
      title: 'Customize Your Token',
      description: 'Enter your token details like name, symbol, and supply.',
    },
    {
      number: '3',
      title: 'Review & Confirm',
      description: 'Review your token settings before deployment.',
    },
    {
      number: '4',
      title: 'Deploy',
      description:
        'Deploy your token to the Ethereum or Binance Smart Chain network.',
    },
  ];

  // Pricing plans data
  const plans = [
    {
      name: 'Basic',
      price: '$49',
      features: ['Standard Token Creation', 'ERC20 or BEP20', 'Email Support'],
    },
    {
      name: 'Premium',
      price: '$99',
      features: [
        'Advanced Token Features',
        'Customizable Supply',
        'Priority Support',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      features: [
        'Full Token Customization',
        'Smart Contract Audit',
        'Dedicated Support',
      ],
    },
  ];

  // FAQs data
  const faqs = [
    {
      question: 'Do I need coding skills to create a token?',
      answer:
        'No, our platform is designed for users without any coding experience.',
    },
    {
      question: 'Which blockchains are supported?',
      answer:
        'We currently support Ethereum (ERC20) and Binance Smart Chain (BEP20).',
    },
    {
      question: 'How secure is the token creation process?',
      answer:
        'We use industry-standard security measures to ensure your tokens are secure.',
    },
  ];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Create ERC20 Token in 5 Minutes</title>
        <meta
          name="description"
          content="Create and deploy your very own ERC20 or BEP20 tokens with ease. With our simple, fast, and convenient token generator, you can bring your ideas to life!"
        />
      </Head>

      {/* Navbar */}
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            TokenFi
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="#features" className="text-white hover:text-gray-300">
                Features
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="text-white hover:text-gray-300">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-white hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-white hover:text-gray-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="#get-started"
            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
      >
        <div className="container mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Create ERC20 Tokens in 5 Minutes
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Create and deploy your very own ERC20 or BEP20 tokens with ease. With
            our simple, fast, and convenient token generator, you can bring your
            ideas to life!
          </p>
          <Link
            href="#get-started"
            className="bg-blue-600 px-6 py-3 rounded text-lg hover:bg-blue-700"
          >
            Start Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">
            Why Choose Our Token Generator?
          </h2>
          <div className="flex flex-wrap justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 px-4 mb-8 flex flex-col items-center"
              >
                <div className="bg-white p-6 rounded shadow flex-1 flex flex-col items-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-black ">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="flex flex-wrap justify-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-full md:w-1/4 px-4 mb-8 flex flex-col items-center"
              >
                <div className="p-6 flex-1">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="#get-started"
            className="bg-blue-600 text-white px-6 py-3 rounded mt-8 inline-block hover:bg-blue-700"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">Pricing Plans</h2>
          <div className="flex flex-wrap justify-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 px-4 mb-8 flex flex-col items-center"
              >
                <div className="bg-white p-6 rounded shadow flex-1 flex flex-col items-center">
                  <h3 className="text-2xl font-semibold mb-4 text-black">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold mb-4 text-gray-700">
                    {plan.price}
                  </p>
                  <ul className="text-gray-600 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={
                      plan.name === 'Enterprise' ? '#contact' : '#get-started'
                    }
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  >
                    {plan.name === 'Enterprise' ? 'Contact Us' : 'Choose Plan'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8">
            Have questions or need custom solutions? Get in touch with us!
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; 2024 TokenFi. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" aria-label="Facebook">
              <img
                src="/images/facebook-icon.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="/images/twitter-icon.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="/images/linkedin-icon.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;