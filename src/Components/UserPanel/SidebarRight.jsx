import React from 'react';
import SidebarCard from './SidebarCard';
import './Course.css';

const cardData = {
  'All': ['AWS Developer', 'QA Automation', 'PMP', 'Java Full Stack', 'Salesforce Developer', 'ServiceNow', 'Python', 'RPA UI Path', 'Big Data Hadoop', 'Blue Prism', 'Subitem 1', 'Subitem 2'],
  'Project Management': ['PMP', 'Business Analyst'],
  'QA Testing':['Qa Automation','Load Runner','Qa Manual Testing','Mobile App Testing'],
  'Business Intelligence':['Tableau','TIBCO','Talend','Cognos','Qilk Sense'],
  'Data Science':['Python','Data Science with Python','Data Science with R'],
  'Programming':['Java Full Stack Development','PHP with MySQL','UI/UX Design','Microsoft .NET','Angular JS Training','Node JS'],
  'Salesforce':['Salesforce Developer','Salesforce Admin','Salesforce Lightning','Salesforce Admin Developer Lightning'],
'ServiceNow':['Service Now','Service Now Developer', 'Service Now Admin'],
'Cloud Computing':['AWS Solution Architecture','AWS Developer','AWS SysOps Admin','Google Cloud', 'DevOps','Internet of things','Snowflake'],
'WorkDay':['WorkDay'],
'Mulesoft':['Mulesoft'],
'Cyber Security':['Cyber Security'],
'Machine learning':['Machine Learning'],
'BlockChain':['BlockChain'],
'Deep Learning':['Deep Learning with TendorFlow'],
'Data Warehousing & ETL':['Informatica'],
'Mobile Development':['Ios AppDevelopment','Android App Development'],
'Big Data':['Big Data Hadoop','Spark and Scala'],
'RPA':['Blue Prism','Automation Anywhere','RPA UI Path'],
'BPM':['Pega'],
'Flutter':['Flutter'],
'Microsoft':['Microsoft Azure Administrator','Azure Solution Architect','Azure Developer Associate'],
'Scrum Master':['Scrum Master']
};

const SidebarRight = ({ category }) => {
  const cardsToDisplay = cardData[category] || [];

  return (
    <div className={`sidebar-right-all ${category === 'All' ? 'display-all' : ''}`}>
      {cardsToDisplay.map((cardTitle, index) => (
        <SidebarCard key={index} title={cardTitle} />
      ))}
    </div>
  );
};

export default SidebarRight;
