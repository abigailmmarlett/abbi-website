import {
  SiTypescript, SiJavascript, SiPython, SiReact,
  SiDotnet, SiNodedotjs, SiDocker, SiKubernetes,
  SiApachekafka, SiGit, SiTailwindcss,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { Code2, Database, Cloud, BarChart2 } from 'lucide-react'
import type { IconType } from 'react-icons'
import type { LucideIcon } from 'lucide-react'

type AnyIcon = IconType | LucideIcon

const COLORS = ['#7FA876', '#E89A85', '#9B86C2'] as const

const techItems: { name: string; Icon: AnyIcon }[] = [
  { name: 'TypeScript',   Icon: SiTypescript },
  { name: 'JavaScript',   Icon: SiJavascript },
  { name: 'C#',           Icon: Code2 },
  { name: 'Python',       Icon: SiPython },
  { name: 'React',        Icon: SiReact },
  { name: '.NET',         Icon: SiDotnet },
  { name: 'Node.js',      Icon: SiNodedotjs },
  { name: 'SQL Server',   Icon: Database },
  { name: 'AWS',          Icon: FaAws },
  { name: 'Azure',        Icon: Cloud },
  { name: 'Docker',       Icon: SiDocker },
  { name: 'Kubernetes',   Icon: SiKubernetes },
  { name: 'Kafka',        Icon: SiApachekafka },
  { name: 'Git',          Icon: SiGit },
  { name: 'Power BI',     Icon: BarChart2 },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
]

const MarqueeItem = ({ name, Icon, color }: { name: string; Icon: AnyIcon; color: string }) => (
  <>
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '0 16px',
      }}
    >
      <Icon size={28} color={color} style={{ opacity: 0.85, flexShrink: 0 }} />
      <span
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
          color,
        }}
      >
        {name}
      </span>
    </span>
    <span style={{ color: '#F5E6A8', fontSize: '1rem', padding: '0 4px', lineHeight: 1 }}>
      ✦
    </span>
  </>
)

export function TechStack() {
  return (
    <section
      className="overflow-hidden py-6"
      style={{
        background: 'linear-gradient(160deg, rgba(250,246,242,0.6) 0%, rgba(199,217,192,0.45) 55%, rgba(199,217,192,0.65) 100%)',
      }}
    >
      <div className="marquee-large-track">
        <span className="marquee-large-content">
          {techItems.map((item, i) => (
            <MarqueeItem
              key={i}
              name={item.name}
              Icon={item.Icon}
              color={COLORS[i % COLORS.length]}
            />
          ))}
        </span>
        <span className="marquee-large-content" aria-hidden="true">
          {techItems.map((item, i) => (
            <MarqueeItem
              key={i}
              name={item.name}
              Icon={item.Icon}
              color={COLORS[i % COLORS.length]}
            />
          ))}
        </span>
      </div>
    </section>
  )
}
