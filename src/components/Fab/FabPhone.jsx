import { Fab } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const FabPhone = ({ phone_number }) => {
    const _phone_ = "tel:" + phone_number
    return (
        <Fab component="a" href={_phone_} aria-label="add" sx={{ mb: 2, color: 'white', backgroundColor: 'red' }}>
            <LocalPhoneIcon />
        </Fab>
    )
}

export default FabPhone