const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Constructor function

const provider = ganache.provider();
const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};
const web3 = new Web3(provider, null, OPTIONS);

const { interface, bytecode } = require('../compile');

let accounts;
let todolist;

beforeEach(async () => {
	//Get a list of all accounts
	accounts = await web3.eth.getAccounts();

	// This deploy the todo contract
	todolist = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode})
		.send({from: accounts[0], gas: '1000000'});

});


describe('TodoList Contract', () => {


  it('deploys a contract', () => {
		assert.ok(todolist.options.address);
	});

  // This will count the number of task initially.
  it('task count', async() => {
    const taskCount = await todolist.methods.taskCount().call({
      from: accounts[0]
    });
    assert.equal(1, taskCount);

  });

  // This will create a task and count
  // the number of tasks.
  it('Create Task', async() => {
    const result = await todolist.methods.createTask('A new task').send({
      from: accounts[0],
      gas: '1000000'
    });

    const taskCount = await todolist.methods.taskCount().call({
      from: accounts[0]
    });
    assert.equal(2, taskCount);
  });

  it('Toggle Tasks', async() => {
    const result = await todolist.methods.toggleCompleted(1).send({
      from: accounts[0],
      gas: '1000000'
    });

    const task = await todolist.methods.tasks(1).call({
      from: accounts[0]
    });

   assert.equal(task.completed, true);

  });
});
