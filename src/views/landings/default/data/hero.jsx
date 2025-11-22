// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Solusi Digital Terpercaya
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.dark' }}>
              Harga Transparan
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/celebration.svg"
              sx={{ width: 16, height: 16 }}
              alt="celebration"
              loading="lazy"
            />
          }
        />
      </>
    )
  },
  headLine: 'Bangun Identitas Digital yang Premium & Profesional',
  captionLine:
    'Tingkatkan kredibilitas bisnis atau profil Anda dengan website berstandar tinggi. Desain elegan, performa cepat, dengan investasi yang sangat efisien',
  primaryBtn: { children: 'Konsultasi Sekarang', link: SECTION_PATH.contact },
  videoThumbnail: '/assets/videos/thumbnails/dummy-thumbnail.jpeg',

  // Tech stack
  listData: [
    { image: '/assets/images/shared/react.svg', title: 'React 19' },
    { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    { image: '/assets/images/shared/material-ui.svg', title: 'Material UI v7' },
    { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    { image: '/assets/images/shared/javascript.svg', title: 'JavaScript' },
    { image: '/assets/images/shared/m3.svg', title: 'Material 3' },
    { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
