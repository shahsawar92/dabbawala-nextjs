// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    name: "Pizza",
    image: "pizza.jpg",
    category: "Italian",
    description: "A delicious dish made with dough, tomato sauce, cheese, and various toppings such as pepperoni, mushrooms, and olives."
  },
  {
    name: "Sushi",
    image: "sushi.jpg",
    category: "Japanese",
    description: "A traditional Japanese dish consisting of vinegared rice combined with various ingredients such as raw fish, vegetables, and seaweed."
  },
  {
    name: "Tacos",
    image: "tacos.jpg",
    category: "Mexican",
    description: "A popular Mexican dish made with corn or wheat tortillas filled with various ingredients such as meat (beef, chicken, or pork), beans, lettuce, tomatoes, and cheese."
  },
  {
    name: "Pad Thai",
    image: "pad_thai.jpg",
    category: "Thai",
    description: "A classic Thai stir-fried noodle dish made with rice noodles, eggs, tofu, shrimp or chicken, bean sprouts, peanuts, and a flavorful sauce."
  },
  {
    name: "Hamburger",
    image: "hamburger.jpg",
    category: "American",
    description: "A classic American sandwich consisting of a grilled or fried patty made from ground beef, placed between two slices of bread (usually a bun), and topped with various condiments such as lettuce, tomato, onions, pickles, and cheese."
  }
];

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>img</TableCell>
              <TableCell>category</TableCell>
              <TableCell>description</TableCell>
              {/* <TableCell>Age</TableCell>
              <TableCell>Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    {/* <Typography variant='caption'>{row.designation}</Typography> */}
                  </Box>
                </TableCell>
                <TableCell>{row.image}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.description}</TableCell>
                {/* <TableCell>{row.age}</TableCell> */}
                {/* <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
