export interface Service {
  code: string;
  title: string;
  body: string;
  icon: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  body: string;
}

export interface WhyPoint {
  icon: string;
  title: string;
  body: string;
}

export interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href?: string;
}
