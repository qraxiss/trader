/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface closePosition {
  exitPrice: number;
  id: string;
}

export interface createPosition {
  baseCurrency: string;
  entryPrice: number;
  exitPrice?: number;
  quantity: number;
  quoteCurrency: string;
  side: 'BUY' | 'SELL';
  status?: 'OPEN' | 'CLOSED';
}

export interface deletePosition {
  id: string;
}

export interface getPosition {
  baseCurrency?: string;
  id?: string;
  quoteCurrency?: string;
  side?: 'BUY' | 'SELL';
  status?: 'OPEN' | 'CLOSED';
}

export interface getPositions {
  baseCurrency?: string;
  quoteCurrency?: string;
  side?: 'BUY' | 'SELL';
  status?: 'OPEN' | 'CLOSED';
}

export interface openPosition {
  baseCurrency: string;
  entryPrice: number;
  exitPrice?: number;
  quantity: number;
  quoteCurrency: string;
  side: 'BUY' | 'SELL';
  status?: 'OPEN' | 'CLOSED';
}

export interface updatePosition {
  id: string;
  position: {
    baseCurrency?: string;
    entryPrice?: number;
    exitPrice?: number;
    quantity?: number;
    quoteCurrency?: string;
    side?: 'BUY' | 'SELL';
    status?: 'OPEN' | 'CLOSED';
  };
}
