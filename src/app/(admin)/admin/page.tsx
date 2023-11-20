'use client'
import { useState } from "react"

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
        <div className="w-1/4 bg-white p-4">
            <div className="space-y-6">

                <button
                onClick={() => handleButtonClick('Exhibitions')}
                className={`flex items-center px-4 py-2 border-2 border-primary rounded-md sm:w-40 hover:bg-primary hover:text-white duration-300 font-semibold ${
                    activeButton === 'Exhibitions' ? 'bg-primary text-white' : ''
                }`}
                >
                Exhibitions
                </button>

                <button
                onClick={() => handleButtonClick('Artist')}
                className={`flex items-center px-4 py-2 border-2 border-primary rounded-md sm:w-40 hover:bg-primary hover:text-white duration-300 font-semibold ${
                    activeButton === 'Artist' ? 'bg-primary text-white' : ''
                }`}
                >
                Artist
                </button>

                <button
                onClick={() => handleButtonClick('Arts')}
                className={`flex items-center px-4 py-2 border-2 border-primary rounded-md sm:w-40 hover:bg-primary hover:text-white duration-300 font-semibold ${
                    activeButton === 'Arts' ? 'bg-primary text-white' : ''
                }`}
                >
                Arts
                </button>

                <button
                onClick={() => handleButtonClick('Records')}
                className={`flex items-center px-4 py-2 border-2 border-primary rounded-md sm:w-40 hover:bg-primary hover:text-white duration-300 font-semibold ${
                    activeButton === 'Records' ? 'bg-primary text-white' : ''
                }`}
                >
                Records
                </button>
            </div>
        </div>
    );
};

const ExhibitionsForm: React.FC = () => {
    return (
      <div className="w-3/4 bg-white p-4">
        <h1 className="text-lg font-semibold mb-4">Exhibitions Form</h1>
        <p>This is the Exhibitions form.</p>
      </div>
    );
};

const ArtistForm = () => {
  return (
    <div className="w-3/4 bg-white p-4">
      <h1 className="text-lg font-semibold mb-4">Artist Form</h1>
      <p>This is the Artist form.</p>
    </div>
  );
};

const ArtsForm = () => {
  return (
    <div className="w-3/4 bg-white p-4">
      <h1 className="text-lg font-semibold mb-4">Arts Form</h1>
      <p>This is the Arts form.</p>
    </div>
  );
};

const RecordsForm = () => {
  return (
    <div className="w-3/4 bg-white p-4">
      <h1 className="text-lg font-semibold mb-4">Records Form</h1>
      <p>This is the Records form.</p>
    </div>
  );
};

export default function AdminPage() {
    const [currentForm, setCurrentForm] = useState<string>('Exhibitions');
    
    const displayForm = (formName: string) => {
      setCurrentForm(formName);
    };
    
    return (
        <div className="flex h-screen space-x-4">
            
            <div className="w-1/12" />

            <FirstForm displayForm={displayForm} />
        
            <div className="w-1/24" />
  
            {currentForm === 'Exhibitions' && <ExhibitionsForm />}
            {currentForm === 'Artist' && <ArtistForm />}
            {currentForm === 'Arts' && <ArtsForm />}
            {currentForm === 'Records' && <RecordsForm />}
            
            <div className="w-1/12" />
        </div>
    );
}