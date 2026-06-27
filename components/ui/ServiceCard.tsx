import {
  IconCertificate,
  IconShieldCheck,
  IconLeaf,
  IconHeartRateMonitor,
  IconClipboardList,
  IconFileText,
  type Icon as TablerIcon,
} from '@tabler/icons-react';
import type { Service } from '@/types';

const iconMap: Record<string, TablerIcon> = {
  certificate: IconCertificate,
  'shield-check': IconShieldCheck,
  leaf: IconLeaf,
  'heart-rate-monitor': IconHeartRateMonitor,
  'clipboard-list': IconClipboardList,
  'file-text': IconFileText,
};

export default function ServiceCard({ code, title, body, icon }: Service) {
  const Icon = iconMap[icon] ?? IconShieldCheck;

  return (
    <article className="service-card bg-white rounded-sm p-7 flex flex-col gap-4 border border-slate-200" style={{ borderTop: '3px solid #C8960A' }}>
      <div className="flex items-start justify-between gap-3">
        <Icon size={28} className="shrink-0" style={{ color: '#C8960A', marginTop: 2 }} aria-hidden="true" />
        <span
          className="text-xs font-bold uppercase tracking-pill px-2 py-0.5 rounded-sm"
          style={{
            fontSize: '10px',
            letterSpacing: '0.1em',
            background: 'rgba(200,150,10,0.1)',
            color: '#C8960A',
          }}
        >
          {code}
        </span>
      </div>
      <h3
        className="font-display font-bold leading-snug"
        style={{ fontSize: '18px', color: '#0B1930' }}
      >
        {title}
      </h3>
      <p
        className="font-body leading-relaxed"
        style={{ fontSize: '13px', color: '#475569', lineHeight: '1.72' }}
      >
        {body}
      </p>
    </article>
  );
}
