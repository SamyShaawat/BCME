import { CONTACT_ITEMS } from '@constants/contact.constants';
import ContactInfoCard from '@components/Contact/ContactInfoCard';
import { JSX } from 'react';

export default function ContactInfoPanel(): JSX.Element {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {CONTACT_ITEMS.map((item) => (<ContactInfoCard key={item.type} item={item} />))}
    </div>
  );
} 
