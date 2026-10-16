import React from 'react';

export const BackgroundSvg: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full object-cover"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="65%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Parede do LANA */}
      <rect x="0" y="0" width="1920" height="720" fill="url(#wallGrad)" />

      {/* Piso de linóleo hospitalar / laboratorial */}
      <polygon points="0,720 1920,720 1920,1080 0,1080" fill="url(#floorGrad)" />
      <line x1="0" y1="720" x2="1920" y2="720" stroke="#475569" strokeWidth="4" />

      {/* Grade de azulejos / perspectiva do piso */}
      <g stroke="#475569" strokeWidth="1" opacity="0.3">
        <line x1="200" y1="720" x2="0" y2="1080" />
        <line x1="500" y1="720" x2="300" y2="1080" />
        <line x1="800" y1="720" x2="700" y2="1080" />
        <line x1="1100" y1="720" x2="1200" y2="1080" />
        <line x1="1400" y1="720" x2="1600" y2="1080" />
        <line x1="1700" y1="720" x2="1920" y2="1080" />
        <line x1="0" y1="840" x2="1920" y2="840" />
        <line x1="0" y1="960" x2="1920" y2="960" />
      </g>

      {/* Janela grande com vista para o campus da UFPE */}
      <rect x="1200" y="80" width="600" height="380" rx="12" fill="#0369a1" opacity="0.15" stroke="#334155" strokeWidth="6" />
      <line x1="1500" y1="80" x2="1500" y2="460" stroke="#334155" strokeWidth="4" />
      <line x1="1200" y1="270" x2="1800" y2="270" stroke="#334155" strokeWidth="4" />

      {/* Telão de Apresentação de Dados (O Gráfico do Piloto!) */}
      <rect x="120" y="70" width="750" height="460" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="4" opacity="0.9" />
      <rect x="130" y="80" width="730" height="440" fill="url(#screenGlow)" />
      
      {/* Conteúdo do Slide de Apresentação: O Gráfico com Barra de Erro */}
      <text x="160" y="130" fill="#e2e8f0" fontSize="22" fontWeight="bold" fontFamily="sans-serif">
        LANA - UFPE • Estudo Piloto tDCS (C3)
      </text>
      <text x="160" y="165" fill="#94a3b8" fontSize="15" fontFamily="sans-serif">
        Protocolo 2mA / 20min • Amplitude do MEP (mV)
      </text>

      {/* Eixos do gráfico */}
      <line x1="220" y1="200" x2="220" y2="440" stroke="#64748b" strokeWidth="3" />
      <line x1="220" y1="440" x2="780" y2="440" stroke="#64748b" strokeWidth="3" />

      {/* Coluna 1: Linha de Base (Baseline) */}
      <rect x="290" y="320" width="80" height="120" rx="4" fill="#3b82f6" opacity="0.8" />
      <text x="295" y="470" fill="#cbd5e1" fontSize="14" fontFamily="sans-serif">Baseline</text>
      {/* Barra de erro Coluna 1 */}
      <line x1="330" y1="270" x2="330" y2="370" stroke="#f43f5e" strokeWidth="3" />
      <line x1="315" y1="270" x2="345" y2="270" stroke="#f43f5e" strokeWidth="3" />
      <line x1="315" y1="370" x2="345" y2="370" stroke="#f43f5e" strokeWidth="3" />

      {/* Coluna 2: Sham */}
      <rect x="440" y="300" width="80" height="140" rx="4" fill="#64748b" opacity="0.8" />
      <text x="455" y="470" fill="#cbd5e1" fontSize="14" fontFamily="sans-serif">Sham</text>
      {/* Barra de erro Coluna 2 */}
      <line x1="480" y1="250" x2="480" y2="350" stroke="#f43f5e" strokeWidth="3" />
      <line x1="465" y1="250" x2="495" y2="250" stroke="#f43f5e" strokeWidth="3" />
      <line x1="465" y1="350" x2="495" y2="350" stroke="#f43f5e" strokeWidth="3" />

      {/* Coluna 3: Ativo (tDCS) */}
      <rect x="590" y="220" width="80" height="220" rx="4" fill="#ec4899" opacity="0.85" />
      <text x="600" y="470" fill="#cbd5e1" fontSize="14" fontFamily="sans-serif">tDCS 2mA</text>
      {/* Barra de erro polêmica Coluna 3 */}
      <line x1="630" y1="160" x2="630" y2="280" stroke="#f43f5e" strokeWidth="3" />
      <line x1="615" y1="160" x2="645" y2="160" stroke="#f43f5e" strokeWidth="3" />
      <line x1="615" y1="280" x2="645" y2="280" stroke="#f43f5e" strokeWidth="3" />
      {/* Estrelinha de significância */}
      <text x="622" y="145" fill="#eab308" fontSize="24" fontWeight="bold">*</text>

      {/* Alerta de erro estatístico no slide */}
      <rect x="690" y="240" width="130" height="50" rx="6" fill="#ef4444" opacity="0.2" stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
      <text x="700" y="262" fill="#fca5a5" fontSize="11" fontWeight="bold">Barra de Erro:</text>
      <text x="700" y="278" fill="#fca5a5" fontSize="11">SD ou SEM ?</text>

      {/* Equipamento de Estimulação Magnética (TMS) ao fundo */}
      <g transform="translate(1450, 480)" opacity="0.85">
        {/* Rack do estimulador */}
        <rect x="0" y="0" width="160" height="260" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="4" />
        <rect x="15" y="20" width="130" height="60" fill="#0284c7" opacity="0.3" />
        <circle cx="80" cy="120" r="24" fill="#334155" stroke="#0ea5e9" strokeWidth="4" />
        <text x="68" y="126" fill="#38bdf8" fontSize="14" fontWeight="bold">TMS</text>
        {/* Braço articulado com bobina em figura de 8 */}
        <path d="M80 0 L100 -90 L60 -160" stroke="#64748b" strokeWidth="12" strokeLinecap="round" fill="none" />
        <ellipse cx="45" cy="-175" rx="20" ry="12" fill="none" stroke="#eab308" strokeWidth="6" />
        <ellipse cx="75" cy="-175" rx="20" ry="12" fill="none" stroke="#eab308" strokeWidth="6" />
      </g>

      {/* Placa oficial do laboratório na parede */}
      <rect x="910" y="80" width="240" height="60" rx="4" fill="#0f172a" stroke="#1d4ed8" strokeWidth="2" />
      <text x="935" y="110" fill="#60a5fa" fontSize="14" fontWeight="bold" fontFamily="sans-serif">LANA - UFPE</text>
      <text x="935" y="128" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Neurociência Aplicada</text>
    </svg>
  );
};
