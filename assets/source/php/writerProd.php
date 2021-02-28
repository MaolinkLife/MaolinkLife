<?
# Выводит информацию в консоль
function debug_to_console($data)
{
  $output = $data;
  if (is_array($output))
    $output = implode(',', $output);

  echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
}


# Возвращает ключ по полученному значению внутри массива
function find($elements, $field, $value)
{
  foreach ($elements as $key => $element) {
    if ($element[$field] === $value)
      # debug_to_console(json_encode($value === $element[$field], JSON_UNESCAPED_UNICODE)); // Для отладки
      return $key;
  }
  return false;
}


# Принимающие данные
$command = $_POST["command"];
$direction_name = $_POST['direction_name'];
$product_name = $_POST['product_name'];
$param_name = $_POST['param_name'];
$method = $_POST['method'];
$type = $_POST['type'];
$assignee = $_POST['assignee'];
$tags = $_POST['tags'];
$newValue = $_POST['newValue'];
$url = $_POST['url'];


# Это только для отладки
$com = array(
  "command" => $command,
  "direction_name" => $direction_name,
  "product_name" => $product_name,
  "param_name" => $param_name,
  "method" => $method,
  "assignee" => $assignee,
  "type" => $type,
  "tags" => $tags,
  "url" => $url
);

echo "Мета-данные: ", json_encode($com, JSON_UNESCAPED_UNICODE), "\n\n"; # Для отладки кода

$file = file_get_contents('../../../../test_libraries/feedback/json/feedbackData.json'); # Открыть файл data.json
$taskList = json_decode($file, TRUE); # Декодировать в массив 

unset($file);  # Очистить переменную $file

# Получаем направление
$direction_index = find($taskList, "name", $direction_name);

# Получаем продукт
$product_index = find($taskList[$direction_index]["products"], "name", $product_name);

# Получаем параметр 
$param_index = find($taskList[$direction_index]["products"][$product_index]["params"], "name", $param_name);

# Проверяем команду, по которой будем определять дальнейшие действия
if ($command === "direction") { # Если это правки направления

  # Если нужное направление есть в файле 
  if (json_encode($direction_index, JSON_UNESCAPED_UNICODE) != 'false') {
    if ($method === "edit") { # Если нужно изменить название направления
      $taskList[$direction_index]['name'] = $newValue;
    } else if ($method === "delete") { # Если нужно полностью удалить направление
      array_splice($taskList, $direction_index, 1);
    } else {
      echo "Такое направление уже существует";
    }
  } else { # Если нужно добавить новое направление
    $taskList[] = array("name" => $direction_name, "products" => array());
  }
} else if ($command === "product") {  # Если это правки продукта 
  # Если нужный продукт есть в файле
  if (json_encode($product_index, JSON_UNESCAPED_UNICODE) != 'false') {
    if ($method === "edit") { # Если нужно изменить продукт
      $taskList[$direction_index]['products'][$product_index]['name'] = $newValue;
    } else if ($method === "delete") { # Если нужно удалить продукт
      array_splice($taskList[$direction_index]['products'], $product_index, 1);
    } else { # Если команда отличается от изменить или удалить продукт
      echo "В данном направлении уже есть такой продукт, попробуйте выбрать другое направление";
    }
  } else { # Если нужно добавить продукт
    $taskList[$direction_index]["products"][] = array("name" => $product_name, "params" => array());
  }
} else if ($command === "param") { # Если это правки параметра

  # Если нужный параметр есть в файле
  if (json_encode($param_index, JSON_UNESCAPED_UNICODE) != 'false') {

    if ($method === "edit") { # Если нужно изменить параметр
      $taskList[$direction_index]['products'][$product_index]['params'][$param_index]['name'] = $newValue;
      $taskList[$direction_index]['products'][$product_index]['params'][$param_index]['assignee'] = $assignee;
      $taskList[$direction_index]['products'][$product_index]['params'][$param_index]['type'] = $type;
      $taskList[$direction_index]['products'][$product_index]['params'][$param_index]['tags'] = $tags;
    } else if ($method === "delete") { # Если нужно удалить параметр
      array_splice($taskList[$direction_index]['products'][$product_index]['params'], $param_index, 1);
    } else { # Если такой параметр уже есть и команда отличается от удалить или изменить
      echo "В данном направлении у выбранного продукта уже есть такой параметр, попробуйте выбрать другое направление или продукт";
    }
  } else { # Если нужно добавить параметр
    $taskList[$direction_index]["products"][$product_index]["params"][] = array(
      "name" => $param_name,
      "assignee" => $assignee,
      "type" => $type,
      "tags" => $tags
    );
  }
}

file_put_contents("../../../../test_libraries/feedback/json/feedbackData.json", json_encode($taskList, JSON_UNESCAPED_UNICODE)); # Перекодировать в формат и записать в файл.

unset($taskList); # Очистить переменную $taskList 
