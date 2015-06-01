var Task = {setTask:function(description, dueDate, completed){
  this.description = description;
  this.dueDate = dueDate;
  this.completed = completed;
  return true;
}, getTask:function()
{
  return this.description +'\t'+this.dueDate.toDateString()+'\t'+ this.completed;
}};

module.exports = Task;
