import React, { useEffect, useRef } from 'react';
import { useMissionStore } from '@/stores/useMissionStore';

export const TwinView: React.FC = React.memo(() => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const activeScenario = useMissionStore((s) => s.activeScenario);

  // Sync scenario to iframe
  useEffect(() => {
    if (iframeRef.current?.contentWindow && activeScenario) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'SET_SCENARIO', scenarioKey: activeScenario },
        '*'
      );
    }
  }, [activeScenario]);

  return (
    <div className="w-full h-full bg-[#060911] overflow-hidden flex flex-col font-mono relative">
      <iframe
        ref={iframeRef}
        src="/twin/index.html"
        title="HAL AeroTwin 3D Digital Twin Engine"
        className="w-full h-full border-0 outline-none select-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  );
});

TwinView.displayName = 'TwinView';
