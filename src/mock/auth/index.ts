export default [
  {
    id: 1,
    label2: '权限1',
    children2: [
      { id: 4, label2: '权限1-1' },
      { id: 5, label2: '权限1-2' },
      { id: 6, label2: '权限1-3' },
      {
        id: 6,
        label2: '权限1-3',
        children2: [
          { id: 4, label2: '权限1-1' },
          { id: 5, label2: '权限1-2' },
          { id: 6, label2: '权限1-3' }
        ]
      },
    ]
  },
  {
    id: 2,
    label2: '权限2'
  },
  {
    id: 3,
    label2: '权限3',
    children2: [
      { id: 4, label2: '权限1-1' },
      { id: 5, label2: '权限1-2' },
      { id: 6, label2: '权限1-3' },
      { id: 6, label2: '权限1-3' },
    ]
  },
  {
    id: 4,
    label2: '权限4'
  },
  {
    id: 5,
    label2: '权限5',
    children2: [
      { id: 4, label2: '权限1-1' },
      { id: 5, label2: '权限1-2' },
      { id: 6, label2: '权限1-3' },
      { id: 6, label2: '权限1-3' },
      { id: 6, label2: '权限1-3' },
    ]

  }
]
