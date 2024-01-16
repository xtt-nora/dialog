export const analysisLayoutShowValueOptions = [
  { label: 'Show values', key: 'value' },
  { label: 'Show real time', key: 'realTime' },
]

export const analysisMiscellaneousShowValueOptions = [
  { label: '3D', key: '3D' },
  { label: 'Flexible', key: 'Flexible' },
  { label: 'Horner', key: 'Horner' },
  { label: 'MDH', key: 'MDH' },
  { label: 'Global results', key: 'Global results' },
  { label: 'Other wells', key: 'Other wells' },
  { label: 'Production logs', key: 'Production logs' },
  {
    label: 'Sensiivity', key: 'Sensiivity', children: [
      { label: 'Sensitivity: History', key: 'SensitivityHistory' },
      { label: 'Sensitivity: Loglog', key: 'SensitivityLoglog' },
      { label: 'Sensitivity: Histogram', key: 'SensitivityHistogram' }
    ]
  },
  { label: 'Specialized lines loglog', key: 'Specialized lines loglog' },
]


export const editQAQCDisplay = [
  { label: 'Show Table', value: 'showTable' },
  { label: 'Show rate lines', value: 'showRateLines' },
  { label: 'Show production event lines', value: 'showProductionEventLines' },
]

export const editQAQCDataSelectOptions = [
  {
    name: 'Well',
    options: [
      { label: 'Tested Well', value: 0 },
      { label: 'Well #1', value: 1 },
    ]
  }
]