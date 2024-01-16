import React from 'react';
import Pricing from './Pricing';

function Products() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#e1ad01d3] text-center md:min-h-screen md:flex-row ">
      <Pricing
        bg="bg-[#FFDC5E]"
        heading="BASIC"
        services={[
          'International Money Transfers',
          '24/5 Live Chat Support',
          'Basic Account Management',
          'Financial Advising',
          'Investment Strategies',
          'Enhanced Security',
          'Basic Budgeting',
          'Transaction Categorization',
          'Account Alerts',
        ]}
        z="z-10"
        price="$9.99/Month"
      />
      <Pricing
        bg="bg-[#fae1df]"
        heading="PREMIUM"
        services={[
          'International Money Transfers',
          '24/7 Live Chat Support',
          'Priority Email',
          'Phone Support',
          'Financial Advising',
          'Investment Strategies',
          'Comprehensive Budgeting',
          'Retirement Planning',
          'Investment Optimization',
          'Portfolio Management',
          'Estate Planning',
          'investment Plans',
          'Premium Research Reports',
        ]}
        price="$49.99/Month"
        z="z-20"
      />
      <Pricing
        bg="bg-orange-300"
        heading="BUSINESS"
        services={[
          'International Money Transfers',
          '24/6 Live Chat Support',
          'Priority Email',
          'Financial Advising',
          'Investment Strategies',
          'Advanced Account Management',
          'Advanced Security',
          'Advanced Budgeting',
          'Investment Insights',
          'Growth Strategies',
          'Tax Planning Tools',
        ]}
        price="$29.99/Month"
        z="z-10"
      />
    </div>
  );
}

export default Products;
