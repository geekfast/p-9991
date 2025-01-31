export const QuickActions = () => {
  const actions = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/7f0278f4f36fa31e9bf76a1cd26fc72da9050c536f9f8243d9912b8e12c309b5",
      label: "Pindai"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/e292db5957f3abae667565940a0b31630707aa2ecff43167f5af1fd37996466a",
      label: "Isi Saldo"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/f04315eb064335ed06b6107d2019da7105969b6503413eca12b8809a193fa11d",
      label: "Kirim"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4183e1286a0a2c7191fb47c67f13b4e11c1e61b62b3adb09165ffcf3e3af8951",
      label: "Minta"
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-white">
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex flex-col items-center space-y-2"
          aria-label={action.label}
        >
          <img
            src={action.icon}
            alt={action.label}
            className="w-12 h-12"
            loading="lazy"
          />
          <span className="text-sm font-medium text-gray-700">{action.label}</span>
        </button>
      ))}
    </div>
  );
};