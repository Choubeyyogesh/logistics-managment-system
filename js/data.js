const demoData={
  shipments:[
    {id:'SHP-2401',origin:'Mumbai, MH',destination:'Delhi, DL',customer:'Northstar Retail',status:'In transit',driver:'Rajesh Kumar',vehicle:'MH 02 AB 4821',date:'2026-11-20',progress:68,items:'Electronics · 24 boxes'},
    {id:'SHP-2402',origin:'Bengaluru, KA',destination:'Chennai, TN',customer:'Aster Living',status:'Delivered',driver:'Priya Sharma',vehicle:'KA 03 CD 1940',date:'2026-11-18',progress:100,items:'Home goods · 12 boxes'},
    {id:'SHP-2403',origin:'Pune, MH',destination:'Hyderabad, TS',customer:'Greenway Foods',status:'Out for delivery',driver:'Arjun Patel',vehicle:'MH 12 EF 7002',date:'2026-11-18',progress:91,items:'Produce · 38 crates'},
    {id:'SHP-2404',origin:'Jaipur, RJ',destination:'Ahmedabad, GJ',customer:'Urban Thread Co.',status:'Pending',driver:'Unassigned',vehicle:'Unassigned',date:'2026-11-21',progress:0,items:'Apparel · 8 cartons'},
    {id:'SHP-2405',origin:'Kolkata, WB',destination:'Lucknow, UP',customer:'Apex Medical',status:'In transit',driver:'Vikram Singh',vehicle:'WB 06 GH 2833',date:'2026-11-19',progress:42,items:'Medical supplies · 15 boxes'},
    {id:'SHP-2406',origin:'Delhi, DL',destination:'Chandigarh, CH',customer:'Horizon Tech',status:'Delivered',driver:'Neha Verma',vehicle:'DL 01 JK 9210',date:'2026-11-17',progress:100,items:'Hardware · 6 boxes'},
    {id:'SHP-2407',origin:'Surat, GJ',destination:'Mumbai, MH',customer:'Loom & Co.',status:'Delayed',driver:'Sameer Shah',vehicle:'GJ 05 LM 3317',date:'2026-11-19',progress:55,items:'Textiles · 20 bales'}
  ],
  vehicles:[
    {id:'VEH-101',plate:'MH 02 AB 4821',type:'Heavy truck',capacity:'12 tons',driver:'Rajesh Kumar',status:'On route',nextService:'28 Nov 2026',km:48200},
    {id:'VEH-102',plate:'KA 03 CD 1940',type:'Delivery van',capacity:'2 tons',driver:'Priya Sharma',status:'Available',nextService:'04 Dec 2026',km:31600},
    {id:'VEH-103',plate:'MH 12 EF 7002',type:'Refrigerated',capacity:'5 tons',driver:'Arjun Patel',status:'On route',nextService:'22 Nov 2026',km:62800},
    {id:'VEH-104',plate:'WB 06 GH 2833',type:'Heavy truck',capacity:'10 tons',driver:'Vikram Singh',status:'On route',nextService:'12 Dec 2026',km:54300},
    {id:'VEH-105',plate:'DL 01 JK 9210',type:'Delivery van',capacity:'1.5 tons',driver:'Neha Verma',status:'Maintenance',nextService:'In service',km:78900},
    {id:'VEH-106',plate:'GJ 05 LM 3317',type:'Cargo truck',capacity:'8 tons',driver:'Sameer Shah',status:'Available',nextService:'30 Nov 2026',km:29400}
  ],
  drivers:[{name:'Rajesh Kumar',initials:'RK',deliveries:142,rating:'4.9',status:'On route'},{name:'Priya Sharma',initials:'PS',deliveries:118,rating:'4.8',status:'Available'},{name:'Arjun Patel',initials:'AP',deliveries:96,rating:'4.9',status:'On route'},{name:'Vikram Singh',initials:'VS',deliveries:107,rating:'4.7',status:'On route'},{name:'Neha Verma',initials:'NV',deliveries:154,rating:'5.0',status:'Available'},{name:'Sameer Shah',initials:'SS',deliveries:83,rating:'4.6',status:'Available'}],
  warehouses:[{id:'WH-01',name:'Mumbai Central Hub',city:'Mumbai, Maharashtra',manager:'Kavita Desai',capacity:82,units:4100,sku:248},{id:'WH-02',name:'Bengaluru South DC',city:'Bengaluru, Karnataka',manager:'Rahul Nair',capacity:64,units:3200,sku:194},{id:'WH-03',name:'Delhi North Hub',city:'Delhi, NCR',manager:'Amit Joshi',capacity:91,units:4550,sku:312},{id:'WH-04',name:'Chennai Port Facility',city:'Chennai, Tamil Nadu',manager:'Meera Iyer',capacity:47,units:2350,sku:167}],
  orders:[{id:'ORD-8821',customer:'Northstar Retail',items:24,total:'₹ 1,24,500',date:'18 Nov 2026',status:'Processing',shipment:'SHP-2401'},{id:'ORD-8820',customer:'Aster Living',items:12,total:'₹ 86,200',date:'18 Nov 2026',status:'Delivered',shipment:'SHP-2402'},{id:'ORD-8819',customer:'Greenway Foods',items:38,total:'₹ 42,800',date:'17 Nov 2026',status:'Processing',shipment:'SHP-2403'},{id:'ORD-8818',customer:'Urban Thread Co.',items:8,total:'₹ 1,65,000',date:'17 Nov 2026',status:'Pending',shipment:'SHP-2404'},{id:'ORD-8817',customer:'Apex Medical',items:15,total:'₹ 2,18,400',date:'16 Nov 2026',status:'Processing',shipment:'SHP-2405'}]
};
const storageKey='logisticspro-data-v1';
function loadData(){try{return {...demoData,...JSON.parse(localStorage.getItem(storageKey)||'{}')}}catch{return structuredClone(demoData)}}
export const db=loadData();
export function saveData(){localStorage.setItem(storageKey,JSON.stringify(db))}
