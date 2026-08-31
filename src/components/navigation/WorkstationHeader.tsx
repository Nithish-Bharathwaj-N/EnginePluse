import React from 'react';
import { useAuthStore, useAircraftStore, useUiStore } from '@/stores';
import { Shield, Clock, Wifi, Globe, Plane, Radio, Activity, Lock } from 'lucide-react';
import { useLiveIndicators } from '@/hooks/useLiveIndicators';

export const WorkstationHeader: React.FC = React.memo(() => {
  const { user, logout } = useAuthStore();
  const { selectedAircraft } = useAircraftStore();
  const { hudUnits, toggleHudUnits } = useUiStore();
  const { istTime, missionTime, packetCount, signalQuality, heartbeat, linkStatus } = useLiveIndicators();

  return (
    <header className="bg-slate-900 text-slate-300 border-b border-slate-800 px-3 py-1 flex items-center justify-between gap-3 font-mono text-[10px] select-none shrink-0 overflow-hidden w-full shadow-inner z-30">
      <div className="flex items-center gap-2.5 shrink-0 overflow-hidden">
        <div className="flex items-center gap-2 pr-2 shrink-0">
          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'conic-gradient(#2563EB, #16A34A, #D97706, #2563EB)' }}>
            <div className="w-3.5 h-3.5 rounded-full bg-[#060B16] flex items-center justify-center border border-slate-700">
              <Plane size={9} className="text-sky-400" />
            </div>
          </div>
          <div className="shrink-0 whitespace-nowrap">
            <span className="font-rajdhani text-xs font-bold text-white tracking-wider">EnginePulse</span>
          </div>
        </div>
      </div>
    </header>
  );
});
WorkstationHeader.displayName = 'WorkstationHeader';
