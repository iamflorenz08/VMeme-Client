'use client'
import { useState } from "react"
import Image from "next/image"
import ProfileForm from "./Profile";
import DashboardForm from "./Dashboard";

interface Props {
  displayForm: (ExhibitionsForm: string) => void;
}

const FirstForm: React.FC<Props> = ({ displayForm }) => {
  const [activeButton, setActiveButton] = useState<string>('Exhibitions');

  const handleButtonClick = (formName: string) => {
    displayForm(formName);
    setActiveButton(formName);
  };

  return (
    <div className="w-1/4 bg-white p-4 border-r-2 border-gray rounded-l-lg">
      <div className="space-y-2">

        <div className="mb-4 ">
          <Image src={"/vmeme_logo.jpg"} alt="logo" width={150} height={32} />
        </div>

        <div className="sm:h-4"/>

        <button
          onClick={() => handleButtonClick('Dashboard')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'Dashboard' ? 'bg-white text-primary' : ''
            }`}
        >
          Dashboard
        </button>

        <button
          onClick={() => handleButtonClick('WebsiteSettings')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'WebsiteSettings' ? 'bg-white text-primary' : ''
            }`}
        >
          Website Settings
        </button>

        <button
          onClick={() => handleButtonClick('ShopSettings')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'ShopSettings' ? 'bg-white text-primary' : ''
            }`}
        >
          Shop Settings
        </button>

        <button
          onClick={() => handleButtonClick('PaintingManagement')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'PaintingManagement' ? 'bg-white text-primary' : ''
            }`}
        >
          Painting Management
        </button>

        <button
          onClick={() => handleButtonClick('OrderManagement')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'OrderManagement' ? 'bg-white text-primary' : ''
            }`}
        >
          Order Management
        </button>

        <button
          onClick={() => handleButtonClick('ManageSlide')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'ManageSlide' ? 'bg-white text-primary' : ''
            }`}
        >
          Manage Slide
        </button>

        <button
          onClick={() => handleButtonClick('Services')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'Services' ? 'bg-white text-primary' : ''
            }`}
        >
          Services
        </button>

        <button
          onClick={() => handleButtonClick('FAQ')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'FAQ' ? 'bg-white text-primary' : ''
            }`}
        >
          FAQ
        </button>

        <button
          onClick={() => handleButtonClick('RegisterCustomer ')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'RegisterCustomer ' ? 'bg-white text-primary' : ''
            }`}
        >
          Register Customer 
        </button>

        <button
          onClick={() => handleButtonClick('PageSettings')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'PageSettings' ? 'bg-white text-primary' : ''
            }`}
        >
          PageSettings
        </button>

        <button
          onClick={() => handleButtonClick('SocialMedia')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'SocialMedia' ? 'bg-white text-primary' : ''
            }`}
        >
          Social Media
        </button>

        <button
          onClick={() => handleButtonClick('Subscriber ')}
          className={`flex items-center px-4 py-2 text-black rounded-md w-fit hover:text-primary duration-300 font-semibold ${activeButton === 'Subscriber' ? 'bg-white text-primary' : ''
            }`}
        >
          Subscriber 
        </button>
      </div>
    </div>
  );
};





const WebsiteSettingsForm = () => {
  return (
    <div className="w-3/4 bg-white p-4 border-r-2 border-gray rounded-r-lg">
      <h1 className="text-lg font-semibold mb-4">Website Settings</h1>
      <p>This is the Website Settings form.</p>
    </div>
  );
};

const ShopSettingsForm = () => {
  return (
    <div className="w-3/4 bg-white p-4 border-r-2 border-gray rounded-r-lg">
      <h1 className="text-lg font-semibold mb-4">Shop Settings Form</h1>
      <p>This is the Shop Settings form.</p>
    </div>
  );
};

const PaintingManagementForm = () => {
  return (
    <div className="w-3/4 bg-white p-4 border-r-2 border-gray rounded-r-lg">
      <h1 className="text-lg font-semibold mb-4">Painting Management Form</h1>
      <p>This is the Records form.</p>
    </div>
  );
};

export default function AdminPage() {
  const [currentForm, setCurrentForm] = useState<string>('Dashboard');

  const displayForm = (formName: string) => {
    setCurrentForm(formName);
  };

  return (
    <div className="bg-gray flex h-screen space-x-1">
      <div className="sm:w-6" />

      <FirstForm displayForm={displayForm} />

      {currentForm === 'Dashboard' && <DashboardForm />}

      <div className="sm:w-6" />
    </div>
  );
}