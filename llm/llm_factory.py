from typing import Type
from .llm_interface import LLMInterface
from .ollama import LLM as OllamaLLM
from .memGPT import LLM as MemGPTLLM
from .fake_llm import LLM as FakeLLM
from llm.coze_llm import LLM as CozeLLM


class LLMFactory:
    @staticmethod
    def create_llm(llm_provider, **kwargs) -> Type[LLMInterface]:

        if llm_provider == "ollama":
            return OllamaLLM(
                system=kwargs.get("SYSTEM_PROMPT"),
                base_url=kwargs.get("BASE_URL"),
                model=kwargs.get("MODEL"),
                llm_api_key=kwargs.get("LLM_API_KEY"),
                project_id=kwargs.get("PROJECT_ID"),
                organization_id=kwargs.get("ORGANIZATION_ID"),
                verbose=kwargs.get("VERBOSE", False),
            )
        elif llm_provider == "mem0":
            from llm.mem0_llm import LLM as Mem0LLM
            return Mem0LLM(
                user_id=kwargs.get("USER_ID"),
                system=kwargs.get("SYSTEM_PROMPT"),
                base_url=kwargs.get("BASE_URL"),
                model=kwargs.get("MODEL"),
                llm_api_key=kwargs.get("LLM_API_KEY"),
                project_id=kwargs.get("PROJECT_ID"),
                organization_id=kwargs.get("ORGANIZATION_ID"),
                mem0_config=kwargs.get("MEM0_CONFIG"),
                verbose=kwargs.get("VERBOSE", False)

            )
        elif llm_provider == "memgpt":
            return MemGPTLLM(
                base_url=kwargs.get("BASE_URL"),
                server_admin_token=kwargs.get("ADMIN_TOKEN"),
                agent_id=kwargs.get("AGENT_ID"),
                verbose=kwargs.get("VERBOSE", False),
            )
        elif llm_provider == "fakellm":
            return FakeLLM()
        elif llm_provider == "coze":
            return CozeLLM(
                base_url=kwargs.get("BASE_URL"),
                bot_id=kwargs.get("BOT_ID"),
                personal_access_token=kwargs.get("PERSONAL_ACCESS_TOKEN"),
                user_id=kwargs.get("USER_ID"),
                verbose=kwargs.get("VERBOSE", False)
            )
        else:
            raise ValueError(f"Unsupported LLM provider: {llm_provider}")


# 使用工廠創建 LLM 實例
# llm_instance = LLMFactory.create_llm("ollama", **config_dict)
