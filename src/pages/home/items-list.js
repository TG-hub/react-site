import React from 'react'

const ItemList = [
  {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-12X5.5-IMP-SNARE-DRUM-KENSINGTON-KNIGHT-DRUMAZON_01_1000x.jpg?v=1594060928',
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-AVIATOR-CAST-ALUMINIUM-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1594061015', 'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088' ],
         title: 'BDC Imp Snare Drum', price: 379, id: '1'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-AVIATOR-CAST-ALUMINIUM-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1594061015',
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-12X5.5-IMP-SNARE-DRUM-KENSINGTON-KNIGHT-DRUMAZON_01_1000x.jpg?v=1594060928',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'],
        title: 'BDC Aviator Snare Drum', price: 639, id: '2'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088', 
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-MAVERICK-MAPLE-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1599848943',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
        title: 'BDC Legend Beech Snare Drum', price: 665, id: '3'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-MAVERICK-MAPLE-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1599848943', 
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
        title: 'BDC Maverick Snare Drum', price: 549, id: '4'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6-BLUEBIRD-CHROME-ON-BRASS-SNARE-DRUM-DRUMAZON_01_4dbe97a7-ea81-4031-98af-613f71bf2955_1000x.jpg?v=1599849358',
         'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6.5-LOUNGE-SNARE-DRUM-WINDERMERE-PEARL-DRUMAZON_01_1000x.jpg?v=1594062485',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
         title: 'BDC Bluebird COB Snare Drum', price: 650, id: '5'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6.5-LOUNGE-SNARE-DRUM-WINDERMERE-PEARL-DRUMAZON_01_1000x.jpg?v=1594062485', 
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6-BLUEBIRD-CHROME-ON-BRASS-SNARE-DRUM-DRUMAZON_01_4dbe97a7-ea81-4031-98af-613f71bf2955_1000x.jpg?v=1599849358',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
        title: 'BDC Lounge Snare Drum', price: 565, id: '6'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-12X5.5-IMP-SNARE-DRUM-KENSINGTON-KNIGHT-DRUMAZON_01_1000x.jpg?v=1594060928',
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-AVIATOR-CAST-ALUMINIUM-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1594061015',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'],
         title: 'BDC Imp Snare Drum', price: 379, id: '7'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-AVIATOR-CAST-ALUMINIUM-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1594061015',
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-12X5.5-IMP-SNARE-DRUM-KENSINGTON-KNIGHT-DRUMAZON_01_1000x.jpg?v=1594060928',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'],
        title: 'BDC Aviator Snare Drum', price: 639, id: '8'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088', 
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-MAVERICK-MAPLE-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1599848943',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
        title: 'BDC Legend Beech Snare Drum', price: 665, id: '9'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-MAVERICK-MAPLE-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1599848943', 
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
        title: 'BDC Maverick Snare Drum', price: 549, id: '10'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6-BLUEBIRD-CHROME-ON-BRASS-SNARE-DRUM-DRUMAZON_01_4dbe97a7-ea81-4031-98af-613f71bf2955_1000x.jpg?v=1599849358',
         'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6.5-LOUNGE-SNARE-DRUM-WINDERMERE-PEARL-DRUMAZON_01_1000x.jpg?v=1594062485',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
         title: 'BDC Bluebird COB Snare Drum', price: 650, id: '11'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6.5-LOUNGE-SNARE-DRUM-WINDERMERE-PEARL-DRUMAZON_01_1000x.jpg?v=1594062485', 
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6-BLUEBIRD-CHROME-ON-BRASS-SNARE-DRUM-DRUMAZON_01_4dbe97a7-ea81-4031-98af-613f71bf2955_1000x.jpg?v=1599849358',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
        title: 'BDC Lounge Snare Drum', price: 565, id: '12'},
    
 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-12X5.5-IMP-SNARE-DRUM-KENSINGTON-KNIGHT-DRUMAZON_01_1000x.jpg?v=1594060928',
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-AVIATOR-CAST-ALUMINIUM-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1594061015',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'],
         title: 'BDC Imp Snare Drum', price: 379, id: '13'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-AVIATOR-CAST-ALUMINIUM-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1594061015',
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-12X5.5-IMP-SNARE-DRUM-KENSINGTON-KNIGHT-DRUMAZON_01_1000x.jpg?v=1594060928',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'],
        title: 'BDC Aviator Snare Drum', price: 639, id: '14'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088', 
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-MAVERICK-MAPLE-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1599848943' ,  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
        title: 'BDC Legend Beech Snare Drum', price: 665, id: '15'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-MAVERICK-MAPLE-SNARE-DRUM-DRUMAZON_01_1000x.jpg?v=1599848943', 
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
        title: 'BDC Maverick Snare Drum', price: 549, id: '16'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6-BLUEBIRD-CHROME-ON-BRASS-SNARE-DRUM-DRUMAZON_01_4dbe97a7-ea81-4031-98af-613f71bf2955_1000x.jpg?v=1599849358',
         'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6.5-LOUNGE-SNARE-DRUM-WINDERMERE-PEARL-DRUMAZON_01_1000x.jpg?v=1594062485',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
         title: 'BDC Bluebird COB Snare Drum', price: 650, id: '17'},

 {image: ['https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6.5-LOUNGE-SNARE-DRUM-WINDERMERE-PEARL-DRUMAZON_01_1000x.jpg?v=1594062485', 
        'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X6-BLUEBIRD-CHROME-ON-BRASS-SNARE-DRUM-DRUMAZON_01_4dbe97a7-ea81-4031-98af-613f71bf2955_1000x.jpg?v=1599849358',  'https://cdn.shopify.com/s/files/1/1422/9358/products/BRITISH-DRUM-COMPANY-BDC-14X5.5-LEGEND-SE-SNARE-DRUM-SPALTED-BEECH-DRUMAZON_01_1000x.jpg?v=1594061088'], 
        title: 'BDC Lounge Snare Drum', price: 565, id: '18'},]
 export default ItemList

 