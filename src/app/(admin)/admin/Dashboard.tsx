import React from 'react'
import ProfileForm from './Profile'


const ShopSettingsForm = () => {
    return (
      <div className="w-3/4 bg-white p-4 border-r-2 border-gray rounded-r-lg">
        <h1 className="text-lg font-semibold mb-4">Shop Settings Form</h1>
        <p>This is the Shop Settings form.</p>
      </div>
    );
  };

export default function DashboardForm() {
  return (
    <div className="w-3/4">
        <ProfileForm />
        <ShopSettingsForm />
    </div>
  )
}
