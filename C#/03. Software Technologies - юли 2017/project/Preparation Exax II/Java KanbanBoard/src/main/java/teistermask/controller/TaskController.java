package teistermask.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import teistermask.bindingModel.TaskBindingModel;
import teistermask.entity.Task;
import teistermask.repository.TaskRepository;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class TaskController {
	private final TaskRepository taskRepository;

	@Autowired
	public TaskController(TaskRepository taskRepository) {

		this.taskRepository = taskRepository;
	}

	@GetMapping("/")
	public String index(Model model) {
		List<Task> tasks = taskRepository.findAll();//wzemi wsiki Tasks from DB

		//filtrirai mi tezi, koito sa "open" w now list
		List<Task> openTasks = tasks.stream()
				.filter(t->t.getStatus().equals("Open"))
				.collect(Collectors.toList());

		//filter this which in a progress into new list
		List<Task> inProgressTasks = tasks.stream()
				.filter(t->t.getStatus().equals("In Progress"))
				.collect(Collectors.toList());

		List<Task> finishedTasks = tasks.stream()
				.filter(t->t.getStatus().equals("Finished"))
				.collect(Collectors.toList());

		//model.addAttribute("tasks", tasks);
		//put them in three parameters on view-to
		model.addAttribute("openTasks", openTasks);
		model.addAttribute("inProgressTasks", inProgressTasks);
		model.addAttribute("finishedTasks", finishedTasks);

		//in the end render this view: "task/index".
		model.addAttribute("view", "task/index");
		return "base-layout";
	}

	@GetMapping("/create")
	public String create(Model model) {
		//here is unneeded: model.addAttribute("task", new TaskBindingModel());
		model.addAttribute("view", "task/create");
		return "base-layout";
	}

	@PostMapping("/create")
	//was: public String createProcess(Model model, TaskBindingModel taskBindingModel)
	//now: towa, koeto idva kato parameter ot formata e taskModel
	public String createPost(Model model, Task taskModel) {
		//if Title or Status is Empty wyrni go na na4alna pozicia
		if (taskModel.getTitle().equals("") || taskModel.getStatus().equals("")) {
			model.addAttribute("task", taskModel);
			model.addAttribute("view", "task/create");
			return "base-layout";
		}

		//nakov iztri redowe 75-77, t.k. smetna za nenujno da se syzdawa new Task
		// red 78: taskRepository.saveAndFlush(taskModel);
		Task task = new Task();
		task.setTitle(taskModel.getTitle());
		task.setStatus(taskModel.getStatus());
		taskRepository.saveAndFlush(task);
		return "redirect:/";
	}

	@GetMapping("/edit/{id}")
	public String edit(Model model, @PathVariable int id) {
		Task task = taskRepository.findOne(id);
		if (task != null) {
			model.addAttribute("task", task);
			model.addAttribute("view", "task/edit");
			return "base-layout";
		}
		return "redirect:/";
	}

	@PostMapping("/edit/{id}")
	public String editProcess(Model model, @PathVariable int id, Task taskModel) {
		if (taskModel.getTitle().equals("") ||
				taskModel.getStatus().equals("")) {

			taskModel.setId(id);
			model.addAttribute("task", taskModel);
			model.addAttribute("view", "task/edit");
			return "base-layout";
		}

		Task taskFromDB = taskRepository.findOne(id);
		if (taskFromDB != null) {
			taskFromDB.setTitle(taskModel.getTitle());
			taskFromDB.setStatus(taskModel.getStatus());
			taskRepository.saveAndFlush(taskFromDB);
		}

		return "redirect:/";
	}
}