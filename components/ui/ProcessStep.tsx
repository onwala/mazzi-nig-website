import type { ProcessStep } from '@/types';

export default function ProcessStepCard({ number, title, body }: ProcessStep) {
  const isFirst = number === 1;

  return (
    <div className="flex flex-col items-center text-center gap-4 px-2">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-display font-bold text-base"
        style={
          isFirst
            ? { background: '#C8960A', color: '#fff' }
            : {
                background: '#163054',
                border: '2px solid rgba(200,150,10,0.35)',
                color: '#E8B020',
              }
        }
        aria-hidden="true"
      >
        {number}
      </div>
      <div className="flex flex-col gap-2">
        <h3
          className="font-display font-bold"
          style={{ fontSize: '15px', color: '#fff' }}
        >
          {title}
        </h3>
        <p
          className="font-body leading-relaxed"
          style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7' }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
