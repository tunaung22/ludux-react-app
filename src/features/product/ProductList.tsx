import React, { useContext, useState, useEffect } from 'react';
import {
  styled,
  IconButton,
  Box,
  Grid,
  Typography,
  InputBase,
  Container,
} from '@mui/material';
import {
  GridView as GirdViewIcon,
  ViewComfy as ViewComfyIcon,
  ViewList as ViewListIcon,
  ListAlt as ListAltIcon,
} from '@mui/icons-material';
import { ProductCard } from './ProductCard';
import { SearchBar } from './SearchBar';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchProductListAsync,
  sayHello,
  selectProductList,
  selectStatus,
} from './productSlice';
import { AppLayoutContext } from '../../contexts/AppLayoutContext';

const AppToolbarStyled = styled(Box)(({ theme }) => ({
  height: '52px',
  padding: '4px 4px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export default function ProductList() {
  const products = useAppSelector(selectProductList);
  const loading = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  const { drawerWidth, appBarHeight, drawerOpened } =
    useContext(AppLayoutContext);

  const [viewMode, setViewMode] = useState('card');

  useEffect(() => {
    dispatch(fetchProductListAsync());
    return () => {
      //
    };
  }, []);

  const ViewModeSwitch = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mr: 2,
        }}
      >
        <Typography>View: </Typography>
        <IconButton onClick={() => setViewMode('card')}>
          <GirdViewIcon />
        </IconButton>
        <IconButton onClick={() => setViewMode('table')}>
          <ListAltIcon />
        </IconButton>
      </Box>
    );
  };

  const renderAppToolbar = (
    <AppToolbarStyled sx={{}}>
      <Typography variant="h5" sx={{ flexGrow: 1 }}>
        Product List
      </Typography>
      <SearchBar />
      <ViewModeSwitch />
    </AppToolbarStyled>
  );
  const renderLoading = <p>Loading...</p>;

  const renderCards = (
    <>
      {products.results.map((product, index) => (
        <>
          {drawerOpened ? (
            <Grid item key={index} sx={{}} xs={12} sm={6} md={4} lg={3}>
              <ProductCard
                product_code={product.product_code}
                name={product.name}
                description={product.description}
                uri={product.uri}
              />
            </Grid>
          ) : (
            <Grid item key={index} sx={{}} xs={6} sm={4} md={3} lg={2}>
              <ProductCard
                product_code={product.product_code}
                name={product.name}
                description={product.description}
                uri={product.uri}
              />
            </Grid>
          )}
        </>
      ))}
    </>
  );
  const renderTable = <>table</>;

  return (
    <Box className="product-list-main">
      {/* breadcrumb */}
      {renderAppToolbar}
      {/* <Container maxWidth="xl"> */}
      <Grid
        container
        spacing={3}
        sx={{
          p: 4,
          justifyContent: 'flex-start',
        }}
      >
        {/* <Grid sx={{ background: 'red', width: '100%' }}> */}
        {loading === 'loading' ? (
          renderLoading
        ) : (
          <>{viewMode === 'card' ? renderCards : renderTable}</>
        )}
        {/* </Grid> */}
      </Grid>
      {/* </Container> */}
    </Box>
  );
}
