import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../State/action';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'full_name', headerName: 'Full Name', width: 130 },
    { field: 'user_city', headerName: 'User City', width: 130 },
    { field: 'orders_size', headerName: 'Order Size', type: 'number', width: 130 },
    { field: 'order_price', headerName: 'Order Price', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'created_at', headerName: 'Created At', width: 130 },
    { field: 'days_to_finish', headerName: 'Duration', type: 'number', width: 130 }
];

export const Orders = () => {

    const dispatch =  useDispatch();

    const data = useSelector(state=>state.data);

    useEffect(()=>{
        dispatch(getOrderDetails());
    },[]);
    
    return (
        <div style={{marginLeft: "320px", width:"1050px", height:"375px"}}>
            {
                data && <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
            }
        </div>
    )
}
