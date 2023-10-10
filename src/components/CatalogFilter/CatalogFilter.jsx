import {
  CatalogFormFilter,
  ContainerLabel,
  FormFilterLabel,
  FormFilterSelect,
  FormFilterOption,
  ContainerInput,
  FormFilterInput,
  InputText,
  FormFilterButton,
} from './CatalogFilter.styled';

const CatalogFilter = () => {
  return (
    <>
      <CatalogFormFilter autoComplete="on">
        <ContainerLabel>
          <FormFilterLabel htmlFor="carBrand">Car brand</FormFilterLabel>
          <FormFilterSelect id="carBrand" name="carBrand">
            <FormFilterOption value="" disabled defaultValue>
              Enter the text
            </FormFilterOption>
            <FormFilterOption value="option1">Buick</FormFilterOption>
            <FormFilterOption value="option2">Volvo</FormFilterOption>
            <FormFilterOption value="option3">Hummer</FormFilterOption>
          </FormFilterSelect>
        </ContainerLabel>

        <ContainerLabel>
          <FormFilterLabel htmlFor="price">Price / 1 hour</FormFilterLabel>
          <FormFilterSelect id="price" name="price" style={{ width: '125px' }}>
            <FormFilterOption value="price1">30</FormFilterOption>
            <FormFilterOption value="price2">40</FormFilterOption>
            <FormFilterOption value="price3">50</FormFilterOption>
          </FormFilterSelect>
        </ContainerLabel>

        <ContainerLabel>
          <FormFilterLabel style={{ marginBottom: '0px' }}>
            Car mileage / km
            <ContainerInput>
              <div style={{ position: 'relative' }}>
                <FormFilterInput type="text" id="from" name="from" />
                <InputText>From</InputText>
              </div>
              <div style={{ position: 'relative' }}>
                <FormFilterInput
                  type="text"
                  id="to"
                  name="to"
                  style={{ borderRadius: '0px 14px 14px 0px', border: 'none' }}
                />
                <InputText>To</InputText>
              </div>
            </ContainerInput>
          </FormFilterLabel>
        </ContainerLabel>

        <FormFilterButton>Search</FormFilterButton>
      </CatalogFormFilter>
    </>
  );
};

export default CatalogFilter;
