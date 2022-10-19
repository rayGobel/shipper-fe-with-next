interface SidebarProp {
  name: string;
  active?: boolean;
}

const SidebarList = (prop: SidebarProp) => {
  const activeClass = prop.active ? 'border-l-4 border-red-500 text-red-600' : 'ml-1';
  const hoverStates = 'hover:bg-red-50 hover:cursor-pointer'
  const classes = `text-lg w-full pl-4 py-1 ${activeClass} ${hoverStates}`;

  return (
    <li className={classes}>
      { prop.name }
    </li>
  )
};

export const SidebarMenu = () => {
  const menus = [
    {
      pathname: '/',
      name: 'Beranda'
    },
    {
      pathname: '/driver-management',
      name: 'Driver Management',
      active: true
    },
    {
      pathname: '/pickup',
      name: 'Pickup'
    },
  ];

  return (
    <ul>
      {
        menus.map((menu) => {
          return (<SidebarList key={menu.name} name={menu.name} active={menu.active} />)
        })
      }
    </ul>
  )
};

export default SidebarMenu;
