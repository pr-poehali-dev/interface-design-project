import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const modules = [
    {
      title: "Управление номенклатурой",
      description: "Заведение справочников номенклатуры, прайс-листов поставщиков и самих поставщиков в систему. Создание интерфейса для управления категориями материалов готовых товаров",
      icon: "Package",
      status: "active",
      color: "bg-blue-500"
    },
    {
      title: "Управление пользователями", 
      description: "Создание ролей пользователей с разным функционалом: руководитель, технолог, сборщик",
      icon: "Users",
      status: "active",
      color: "bg-green-500"
    },
    {
      title: "Интерфейс для ТСД",
      description: "Разработка интерфейса ТСД для работы на складе производства",
      icon: "Smartphone",
      status: "development",
      color: "bg-purple-500"
    },
    {
      title: "Отчеты",
      description: "Перенастройка текущих отчетов под новые роли (минимум 2 отчета)",
      icon: "FileText",
      status: "active",
      color: "bg-orange-500"
    },
    {
      title: "Кабинет поставщика",
      description: "Переработать кабинет поставщика с учетом новых функций. Добавить управление заказом и складом",
      icon: "Store",
      status: "development",
      color: "bg-indigo-500"
    },
    {
      title: "Рефакторинг данных",
      description: "Отделить на физическом уровне данных по проекту ЦВЕТы и ЦЕХа, сохранив при этом их синхронизацию",
      icon: "Database",
      status: "planned",
      color: "bg-red-500"
    },
    {
      title: "Тех процессы",
      description: "Создание, описание и управление тех процессами продуктов производства. Из каких компонент состоит тот или иной продукт",
      icon: "Settings",
      status: "active",
      color: "bg-teal-500"
    },
    {
      title: "Модификаторы продуктов",
      description: "Создание интерфейса модификаторов продуктов. Возможность не создавать гигантскую сложноуправляемую базу продуктов",
      icon: "Sliders",
      status: "planned",
      color: "bg-pink-500"
    }
  ];

  const warehouseOperations = [
    { name: "Приемка", count: 12, icon: "ArrowDown", color: "text-green-600" },
    { name: "Отгрузка", count: 8, icon: "ArrowUp", color: "text-blue-600" },
    { name: "Инвентаризация", count: 3, icon: "Search", color: "text-orange-600" }
  ];

  const metrics = [
    { label: "Выполнено задач", value: 73, max: 100 },
    { label: "Эффективность", value: 85, max: 100 },
    { label: "Загрузка склада", value: 67, max: 100 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Система управления производством</h1>
          <p className="text-gray-600">Комплексное решение для управления складом и производственными процессами</p>
        </div>

        {/* Warehouse Operations */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Складские операции</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {warehouseOperations.map((operation, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{operation.name}</p>
                      <p className="text-2xl font-bold text-gray-900">{operation.count}</p>
                    </div>
                    <div className={`p-3 rounded-full bg-gray-100 ${operation.color}`}>
                      <Icon name={operation.icon} size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Показатели эффективности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">{metric.label}</span>
                    <span className="text-sm font-bold text-gray-900">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Modules */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Модули системы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`p-2 rounded-lg ${module.color} text-white mb-3`}>
                      <Icon name={module.icon} size={24} />
                    </div>
                    <Badge 
                      variant={module.status === 'active' ? 'default' : module.status === 'development' ? 'secondary' : 'outline'}
                    >
                      {module.status === 'active' ? 'Активен' : module.status === 'development' ? 'Разработка' : 'Планируется'}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 leading-relaxed">
                    {module.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full mt-4">
                    Открыть модуль
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Быстрые действия</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-16 flex-col gap-2" variant="outline">
              <Icon name="Plus" size={20} />
              <span className="text-xs">Новая приемка</span>
            </Button>
            <Button className="h-16 flex-col gap-2" variant="outline">
              <Icon name="Truck" size={20} />
              <span className="text-xs">Отгрузка</span>
            </Button>
            <Button className="h-16 flex-col gap-2" variant="outline">
              <Icon name="ClipboardCheck" size={20} />
              <span className="text-xs">Инвентаризация</span>
            </Button>
            <Button className="h-16 flex-col gap-2" variant="outline">
              <Icon name="BarChart3" size={20} />
              <span className="text-xs">Отчеты</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;