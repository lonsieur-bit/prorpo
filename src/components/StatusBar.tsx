import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

export default function StatusBar() {
  return (
    <div className="status-bar">
      <span className="font-medium">9:41</span>
      <div className="flex items-center gap-1">
        <Signal size={14} />
        <Wifi size={14} />
        <Battery size={14} />
      </div>
    </div>
  );
}