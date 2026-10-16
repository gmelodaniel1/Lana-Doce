import React from 'react';
import { CharacterId } from '../../types/character';
import { CHARACTERS_METADATA } from '../../constants/characters';

interface CharacterAvatarSvgProps {
  characterId: CharacterId;
  expression: string;
  className?: string;
}

export const CharacterAvatarSvg: React.FC<CharacterAvatarSvgProps> = ({
  characterId,
  expression,
  className = '',
}) => {
  const meta = CHARACTERS_METADATA[characterId];
  const theme = meta?.themeColor || '#64748b';

  // Renderização específica para Gabriel (Gabs): Careca, óculos, jaleco sério
  if (characterId === 'gabs') {
    return (
      <svg
        viewBox="0 0 400 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto h-full max-h-[85vh] drop-shadow-2xl ${className}`}
      >
        <defs>
          <linearGradient id="gabsJaleco" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="gabsSkin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbd38d" />
            <stop offset="100%" stopColor="#f6ad55" />
          </linearGradient>
        </defs>

        {/* Sombra base */}
        <ellipse cx="200" cy="630" rx="140" ry="20" fill="rgba(0,0,0,0.25)" />

        {/* Corpo / Jaleco */}
        <path
          d="M100 340 L80 640 L320 640 L300 340 L260 270 L140 270 Z"
          fill="url(#gabsJaleco)"
          stroke="#94a3b8"
          strokeWidth="3"
        />
        {/* Camisa interna */}
        <polygon points="175,270 200,380 225,270" fill="#3b82f6" />
        {/* Gravata / gola */}
        <polygon points="195,300 205,300 203,370 197,370" fill="#1e3a8a" />

        {/* Braços cruzados (postura clássica do Gabs) */}
        <path
          d="M100 340 C90 410, 130 460, 200 460 C270 460, 310 410, 300 340"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="30"
          strokeLinecap="round"
        />
        <path
          d="M130 440 L270 440"
          stroke="#94a3b8"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Pescoço */}
        <rect x="175" y="220" width="50" height="60" fill="url(#gabsSkin)" rx="8" />

        {/* Cabeça Careca */}
        <path
          d="M135 180 C135 90, 265 90, 265 180 C265 240, 235 260, 200 260 C165 260, 135 240, 135 180 Z"
          fill="url(#gabsSkin)"
          stroke="#dd6b20"
          strokeWidth="2"
        />

        {/* Orelhas */}
        <circle cx="132" cy="180" r="14" fill="#f6ad55" />
        <circle cx="268" cy="180" r="14" fill="#f6ad55" />

        {/* Sobrancelhas baseadas na expressão */}
        {expression === 'stern' ? (
          <>
            <line x1="160" y1="148" x2="190" y2="158" stroke="#7b341e" strokeWidth="5" strokeLinecap="round" />
            <line x1="210" y1="158" x2="240" y2="148" stroke="#7b341e" strokeWidth="5" strokeLinecap="round" />
          </>
        ) : expression === 'approving' ? (
          <>
            <line x1="160" y1="152" x2="190" y2="150" stroke="#7b341e" strokeWidth="4" strokeLinecap="round" />
            <line x1="210" y1="150" x2="240" y2="152" stroke="#7b341e" strokeWidth="4" strokeLinecap="round" />
          </>
        ) : (
          <>
            <line x1="160" y1="152" x2="190" y2="155" stroke="#7b341e" strokeWidth="4" strokeLinecap="round" />
            <line x1="210" y1="155" x2="240" y2="152" stroke="#7b341e" strokeWidth="4" strokeLinecap="round" />
          </>
        )}

        {/* Óculos Retangulares Intelectuais */}
        <rect x="150" y="155" width="40" height="26" rx="4" fill="rgba(255,255,255,0.3)" stroke="#1e293b" strokeWidth="4" />
        <rect x="210" y="155" width="40" height="26" rx="4" fill="rgba(255,255,255,0.3)" stroke="#1e293b" strokeWidth="4" />
        <line x1="190" y1="168" x2="210" y2="168" stroke="#1e293b" strokeWidth="4" />

        {/* Olhos sob os óculos */}
        {expression === 'approving' ? (
          // Olhos fechados em aprovação contida
          <>
            <path d="M160 170 Q170 162 180 170" stroke="#1e293b" strokeWidth="3" fill="none" />
            <path d="M220 170 Q230 162 240 170" stroke="#1e293b" strokeWidth="3" fill="none" />
          </>
        ) : expression === 'tired' ? (
          // Olhar cansado
          <>
            <circle cx="170" cy="168" r="4" fill="#1e293b" />
            <circle cx="230" cy="168" r="4" fill="#1e293b" />
            <path d="M158 184 Q170 188 182 184" stroke="#c53030" strokeWidth="2" fill="none" />
            <path d="M218 184 Q230 188 242 184" stroke="#c53030" strokeWidth="2" fill="none" />
          </>
        ) : (
          // Olhar analítico sério
          <>
            <circle cx="170" cy="168" r="4.5" fill="#1e293b" />
            <circle cx="230" cy="168" r="4.5" fill="#1e293b" />
          </>
        )}

        {/* Nariz */}
        <path d="M200 172 L196 195 L204 195" stroke="#c05621" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Boca baseada na expressão */}
        {expression === 'approving' ? (
          <path d="M188 220 Q200 226 212 220" stroke="#7b341e" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : expression === 'stern' ? (
          <line x1="185" y1="222" x2="215" y2="222" stroke="#7b341e" strokeWidth="3.5" strokeLinecap="round" />
        ) : (
          <line x1="188" y1="222" x2="212" y2="222" stroke="#7b341e" strokeWidth="3" strokeLinecap="round" />
        )}

        {/* Crachá do LANA / UFPE */}
        <rect x="130" y="360" width="35" height="50" rx="4" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
        <rect x="135" y="365" width="25" height="15" fill="#0284c7" />
        <line x1="135" y1="388" x2="160" y2="388" stroke="#334155" strokeWidth="2" />
        <line x1="135" y1="394" x2="155" y2="394" stroke="#64748b" strokeWidth="1.5" />
      </svg>
    );
  }

  // Renderização específica para Profa. Kátia: Elegante, olhar sereno, jaleco alinhado
  if (characterId === 'katia') {
    return (
      <svg
        viewBox="0 0 400 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto h-full max-h-[85vh] drop-shadow-2xl ${className}`}
      >
        <defs>
          <linearGradient id="katiaHair" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#18181b" />
          </linearGradient>
          <linearGradient id="katiaJaleco" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>

        <ellipse cx="200" cy="630" rx="130" ry="18" fill="rgba(0,0,0,0.25)" />

        {/* Cabelo Fundo */}
        <path d="M125 150 C110 260, 115 320, 140 370 L260 370 C285 320, 290 260, 275 150 Z" fill="url(#katiaHair)" />

        {/* Corpo / Jaleco elegante */}
        <path
          d="M110 320 L95 640 L305 640 L290 320 L250 260 L150 260 Z"
          fill="url(#katiaJaleco)"
          stroke="#cbd5e1"
          strokeWidth="3"
        />

        {/* Lenço azul sob a gola */}
        <polygon points="175,270 200,350 225,270" fill="#0284c7" />

        {/* Mãos unidas à frente (postura suave da Profa Kátia) */}
        <circle cx="200" cy="450" r="28" fill="#fce7f3" stroke="#f472b6" strokeWidth="2" />

        {/* Pescoço */}
        <rect x="180" y="210" width="40" height="60" fill="#fce7f3" rx="6" />

        {/* Rosto */}
        <path
          d="M145 160 C145 100, 255 100, 255 160 C255 225, 230 250, 200 250 C170 250, 145 225, 145 160 Z"
          fill="#fce7f3"
        />

        {/* Cabelo elegante frente */}
        <path
          d="M140 160 C145 90, 255 90, 260 160 C240 130, 215 120, 200 125 C185 120, 160 130, 140 160 Z"
          fill="url(#katiaHair)"
        />

        {/* Olhos serenos e penetrantes */}
        {expression === 'happy' ? (
          <>
            <path d="M165 170 Q175 162 185 170" stroke="#334155" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M215 170 Q225 162 235 170" stroke="#334155" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="175" cy="168" r="4.5" fill="#334155" />
            <circle cx="225" cy="168" r="4.5" fill="#334155" />
            <circle cx="176.5" cy="166.5" r="1.5" fill="#ffffff" />
            <circle cx="226.5" cy="166.5" r="1.5" fill="#ffffff" />
          </>
        )}

        {/* Sobrancelhas */}
        <line x1="165" y1="152" x2="185" y2="152" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="215" y1="152" x2="235" y2="152" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />

        {/* Nariz sutil */}
        <path d="M200 175 L198 190 L203 190" stroke="#f472b6" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Boca suave */}
        {expression === 'happy' ? (
          <path d="M188 215 Q200 224 212 215" stroke="#9d174d" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : expression === 'disappointed' ? (
          <path d="M190 220 Q200 216 210 220" stroke="#9d174d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        ) : (
          <line x1="190" y1="216" x2="210" y2="216" stroke="#9d174d" strokeWidth="2.5" strokeLinecap="round" />
        )}
      </svg>
    );
  }

  // Renderização específica para Daniel: Cabelo ondulado, sorriso carismático/caótico
  if (characterId === 'daniel') {
    return (
      <svg
        viewBox="0 0 400 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto h-full max-h-[85vh] drop-shadow-2xl ${className}`}
      >
        <defs>
          <linearGradient id="daniHair" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>
        </defs>

        <ellipse cx="200" cy="630" rx="135" ry="18" fill="rgba(0,0,0,0.25)" />

        {/* Corpo / Jaleco desabotoado */}
        <path
          d="M100 320 L85 640 L315 640 L300 320 L260 260 L140 260 Z"
          fill="#f1f5f9"
          stroke="#cbd5e1"
          strokeWidth="3"
        />

        {/* Camisa estampada por baixo */}
        <polygon points="160,260 200,420 240,260" fill="#ea580c" />

        {/* Pescoço */}
        <rect x="180" y="210" width="40" height="60" fill="#fed7aa" rx="6" />

        {/* Rosto */}
        <path
          d="M145 160 C145 100, 255 100, 255 160 C255 225, 230 250, 200 250 C170 250, 145 225, 145 160 Z"
          fill="#fed7aa"
        />

        {/* Cabelo ondulado volumoso */}
        <path
          d="M130 160 C125 70, 275 70, 270 160 C260 135, 235 120, 200 120 C165 120, 140 135, 130 160 Z"
          fill="url(#daniHair)"
        />
        <circle cx="140" cy="140" r="20" fill="url(#daniHair)" />
        <circle cx="260" cy="140" r="20" fill="url(#daniHair)" />
        <circle cx="200" cy="95" r="25" fill="url(#daniHair)" />

        {/* Olhos animados */}
        <circle cx="175" cy="168" r="5" fill="#334155" />
        <circle cx="225" cy="168" r="5" fill="#334155" />
        <circle cx="177" cy="166" r="1.5" fill="#ffffff" />
        <circle cx="227" cy="166" r="1.5" fill="#ffffff" />

        {/* Sobrancelhas brincalhonas */}
        <line x1="165" y1="150" x2="185" y2="154" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
        <line x1="215" y1="146" x2="235" y2="152" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />

        {/* Sorriso largo e carismático */}
        <path
          d="M180 215 Q200 235 220 215"
          stroke="#9a3412"
          strokeWidth="3.5"
          fill="#ffffff"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Fallback genérico estilizado para os outros personagens do LANA
  return (
    <div className={`flex flex-col items-center justify-end h-full max-h-[85vh] ${className}`}>
      <div className="relative flex flex-col items-center">
        {/* Silhueta com tema do personagem */}
        <div
          className="w-56 h-80 rounded-t-full border-4 flex flex-col items-center justify-center p-4 backdrop-blur-md transition-all duration-300"
          style={{ borderColor: theme, backgroundColor: `${theme}22` }}
        >
          <div
            className="w-24 h-24 rounded-full border-2 mb-3 flex items-center justify-center font-bold text-3xl shadow-lg"
            style={{ borderColor: theme, color: theme, backgroundColor: '#0f172a' }}
          >
            {meta?.name?.slice(0, 2).toUpperCase() || 'VN'}
          </div>
          <div className="font-bold text-center text-lg text-slate-100">{meta?.name || characterId}</div>
          <div className="text-xs text-center text-slate-400 mt-1 uppercase tracking-wider">{meta?.title}</div>
          <div
            className="mt-4 px-3 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: `${theme}33`, color: theme }}
          >
            Expressão: {expression}
          </div>
        </div>
        <div className="w-64 h-6 rounded-full bg-black/40 blur-sm -mt-2"></div>
      </div>
    </div>
  );
};

