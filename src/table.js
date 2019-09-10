import React from 'react';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '1',
    primer_nombre: 'Diego',
    segundo_nombre: 'Josue',
    primer_apellido: 'Mendoza',
    segundo_apellido: 'Avila',
    extension:504,
    telefono: 88899898
  },
  {
    key: '2',
    primer_nombre: 'Oliver',
    segundo_nombre: 'Gabriel',
    primer_apellido: 'Garcia',
    segundo_apellido: 'Hernandez',
    extension:504,
    telefono: 88899899
  },
  {
    key: '3',
    primer_nombre: 'Luis',
    segundo_nombre: 'Jose',
    primer_apellido: 'Turcios',
    segundo_apellido: 'Merlo',
    extension:504,
    telefono: 85699899
  },

  {
    key: '4',
    primer_nombre: 'Maria',
    segundo_nombre: 'Fernanda',
    primer_apellido: 'Castro',
    segundo_apellido: 'Cover',
    extension:1,
    telefono: 88101199
  }

];

class ContactTable extends React.Component {
  state = {
    searchText: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Buscar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Buscar
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Borrar
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Primer Nombre',
        dataIndex: 'primer_nombre',
        key: 'primer_nombre',
        width: '20%',
        ...this.getColumnSearchProps('primer_nombre'),
      },
      {
        title: 'Segundo Nombre',
        dataIndex: 'segundo_nombre',
        key: 'segundo_nombre',
        width: '20%',
        ...this.getColumnSearchProps('segundo_nombre'),
      },
      {
        title: 'Primer Apellido',
        dataIndex: 'primer_apellido',
        key: 'primer_apellido',
        width: '20%',
        ...this.getColumnSearchProps('primer_apellido'),
      },
      {
        title: 'Segundo Apellido',
        dataIndex: 'segundo_apellido',
        key: 'segundo_apellido',
        width: '20%',
        ...this.getColumnSearchProps('segundo_apellido'),
      },
      {
        title: 'Extension',
        dataIndex: 'extension',
        key: 'extension',
        width: '20%',
        ...this.getColumnSearchProps('extension'),
      },
      {
        title: 'Telefono',
        dataIndex: 'telefono',
        key: 'telfono',
        width: '20%',
        ...this.getColumnSearchProps('telefono'),
      },
    ];
    return <Table columns={columns} dataSource={data} />;
  }
}


export default ContactTable;