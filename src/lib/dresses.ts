import fs from 'node:fs';
import path from 'node:path';

export interface Dress {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  type: 'new' | 'consignment';
  status: 'available' | 'reserved' | 'sold';
  color: string;
  style: string;
  details?: string;
  image?: string;
  featured?: boolean;
}

const DRESSES_DIR = 'content/dresses';

const SAMPLE_IMAGES = [
  '/images/salon/saty-ruzove-1.jpeg',
  '/images/salon/saty-ruzove-3.jpeg',
  '/images/salon/saty-ruzove-5.jpeg',
  '/images/salon/saty-fialove-1.jpeg',
];

export function getDresses(): Dress[] {
  const dressesPath = path.join(process.cwd(), DRESSES_DIR);
  
  if (!fs.existsSync(dressesPath)) {
    return [];
  }
  
  const files = fs.readdirSync(dressesPath).filter(f => f.endsWith('.json'));
  let imageIndex = 0;
  
  return files.map(filename => {
    const filepath = path.join(dressesPath, filename);
    const content = fs.readFileSync(filepath, 'utf-8');
    const dress = JSON.parse(content) as Dress;
    
    // Use sample images from salon folder
    dress.image = SAMPLE_IMAGES[imageIndex % SAMPLE_IMAGES.length];
    imageIndex++;
    
    return dress;
  }).filter(d => d.status === 'available');
}