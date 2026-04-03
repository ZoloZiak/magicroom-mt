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
  details: string;
  image?: string;
}

const DRESSES_DIR = 'content/dresses';

export function getDresses(): Dress[] {
  const dressesPath = path.join(process.cwd(), 'public', DRESSES_DIR);
  
  if (!fs.existsSync(dressesPath)) {
    return [];
  }
  
  const files = fs.readdirSync(dressesPath).filter(f => f.endsWith('.json'));
  
  return files.map(filename => {
    const filepath = path.join(dressesPath, filename);
    const content = fs.readFileSync(filepath, 'utf-8');
    const dress = JSON.parse(content) as Dress;
    
    // Auto-generate image path from JSON filename
    const baseName = filename.replace('.json', '');
    const imagePath = `/${DRESSES_DIR}/${baseName}.jpg`;
    const imagePathJpeg = `/${DRESSES_DIR}/${baseName}.jpeg`;
    const imagePathPng = `/${DRESSES_DIR}/${baseName}.png`;
    
    // Check which image exists
    if (fs.existsSync(path.join(dressesPath, `${baseName}.jpg`))) {
      dress.image = imagePath;
    } else if (fs.existsSync(path.join(dressesPath, `${baseName}.jpeg`))) {
      dress.image = imagePathJpeg;
    } else if (fs.existsSync(path.join(dressesPath, `${baseName}.png`))) {
      dress.image = imagePathPng;
    }
    
    return dress;
  }).filter(d => d.status === 'available');
}