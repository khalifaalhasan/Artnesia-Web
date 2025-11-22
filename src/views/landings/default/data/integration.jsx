// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL, KONSULTASI_PATH } from '@/path';

export const integration = {
  headLine: 'Solusi Digital untuk Berbagai Sektor Bisnis',
  captionLine:
    'Dari usaha rintisan (Startup) hingga perusahaan mapan, kami merancang website yang sesuai dengan karakteristik industri dan target pasar Anda di Indonesia.',
  primaryBtn: {
    children: 'Documentation',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: KONSULTASI_PATH,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'Startup Teknologi' },
    { label: 'F&B dan Kuliner (Restoran, Cafe, Franchise)' },
    { label: 'Properti & Real Estate' },
    { label: 'Pendidikan & Sekolah (Sekolah, Kampus, Kursus)' },
    { label: 'Kesehatan & Klinik (Dokter, Apotek, Gym)' },
    { label: 'Travel & Pariwisata (Agen Travel, Hotel, Sewa Mobil)' },
    { label: 'Jasa Profesional (Pengacara, Notaris, Konsultan)' },
    { label: 'Logistik & Ekspedisi' },
    { label: 'Kontraktor & Konstruksi' },
    { label: 'Organisasi & Yayasan (Non-profit/NGO)' },
    { label: 'UMKM Kreatif (Kerajinan, Seni, Fotografi)' },
    { label: 'Email Marketing and SEO Tools' }
  ]
};
