export const airFilters = [
  {
    id: 'af-001',
    title: 'Particulate Filter',
    model: 'NAF-PART-1',
    category: 'Particulate',
    capacity: '100 CFM',
    features: [ '99.99% efficiency at 0.01 micron', 'Pleated filter element', 'Automatic drain valve' ],
    specifications: { 'Flow Rate': '100 CFM (2.8 m³/min)', 'Particle Removal': '0.01 micron', 'Pressure Drop': '2 PSI', 'Port Size': '1" NPT' },
    applications: [ 'Pneumatic tools', 'Instrumentation air', 'Process air' ],
    price: '$485'
  },
  {
    id: 'af-002',
    title: 'Coalescing Filter',
    model: 'NAF-COAL-2',
    category: 'Coalescing',
    capacity: '150 CFM',
    features: [ 'Oil removal down to 0.01 ppm', 'Borosilicate microfiber media', 'Differential pressure indicator' ],
    specifications: { 'Flow Rate': '150 CFM (4.2 m³/min)', 'Oil Removal': '0.01 ppm', 'Particle Removal': '0.1 micron', 'Port Size': '1.5" NPT' },
    applications: [ 'Spray painting', 'Food processing', 'Clean room applications' ],
    price: '$750'
  },
  {
    id: 'af-003',
    title: 'Activated Carbon Filter',
    model: 'NAF-CARB-3',
    category: 'Carbon',
    capacity: '75 CFM',
    features: [ 'Removes oil vapors and odors', 'High-grade activated carbon', 'Food grade approved' ],
    specifications: { 'Flow Rate': '75 CFM (2.1 m³/min)', 'Oil Vapor Removal': '99.99%', 'Service Life': '8000 hours', 'Port Size': '1" NPT' },
    applications: [ 'Breathing air systems', 'Laboratory use', 'Medical equipment' ],
    price: '$950'
  }
];
