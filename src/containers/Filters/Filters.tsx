import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import { MultiSelectChip } from '../../components/MultiSelect'
import { RangeSlider } from '../../components/RangeSlider'
import { DropdownWrapper } from '../../components/DropdownWrapper'
import styles from '../Filters/Filters.module.css'

export const Filters = ({
  categories,
  names,
  amountRange
}: {
  categories: Array<string>
  names: Array<string>
  amountRange: Array<number>
}) => {
  return (
    <Box
      sx={{
        width: '600px',
        backgroundColor: 'white',
        borderColor: 'rgba(0, 0, 0, 1)',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div className={styles.filtersContainer}>
        <MultiSelectChip title="Categories" list={categories} />
        <DropdownWrapper title="dropdown-demo">
          <RangeSlider />
        </DropdownWrapper>
      </div>
      <Button disabled>Clear All</Button>
    </Box>
  )
}
