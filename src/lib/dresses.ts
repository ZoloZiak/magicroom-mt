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

export function getDresses(): Dress[] {
  // Read from content folder, images from public
  const dressesPath = path.join(process.cwd(), DRESSES_DIR);
  const publicPath = path.join(process.cwd(), 'public', 'content', 'dresses');
  
  if (!fs.existsSync(dressesPath)) {
    return [];
  }
  
  const files = fs.readdirSync(dressesPath).filter(f => f.endsWith('.json'));
  
  return files.map(filename => {
    const filepath = path.join(dressesPath, filename);
    const content = fs.readFileSync(filepath, 'utf-8');
    const dress = JSON.parse(content) as Dress;
    
    // Auto-generate image path from JSON filename - check in public folder
    const baseName = filename.replace('.json', '');
    const imagePathJpg = path.join(publicPath, `${baseName}.jpg`);
    const imagePathJpeg = path.join(publicPath, `${baseName}.jpeg`);
    const imagePathPng = path.join(publicPath, `${baseName}.png`);
    
    // Set URL path for the image if it exists
    if (fs.existsSync(imagePathJpg)) {
      dress.image = `/content/dresses/${baseName}.jpg`;
    } else if (fs.existsSync(imagePathJpeg)) {
      dress.image = `/content/dresses/${baseName}.jpeg`;
    } else if (fs.existsSync(imagePathPng)) {
      dress.image = `/content/dresses/${baseName}.png`;
    }
    
    return dress;
  }).filter(d => d.status === 'available');
}