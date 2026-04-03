from typing import TypedDict
from langgraph.graph import StateGraph, END

class AgentState(TypedDict):
    input_text: str
    output_text: str

def dummy_node(state: AgentState):
    return {"output_text": "Hello from Dummy Agent"}

def create_graph():
    workflow = StateGraph(AgentState)
    workflow.add_node("dummy", dummy_node)
    workflow.set_entry_point("dummy")
    workflow.add_edge("dummy", END)
    return workflow.compile()

graph = create_graph()

def dummy_workflow():
    initial_state = {"input_text": "Start", "output_text": ""}
    result = graph.invoke(initial_state)
    return result.get("output_text", "")
